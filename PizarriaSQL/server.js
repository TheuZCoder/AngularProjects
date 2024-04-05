const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser'); // Importe o body-parser aqui
const cors = require('cors');

const app = express();
const port = 3000;

// Configurar o CORS para permitir todas as origens
app.use(cors());

// Configurar o body-parser para analisar corpos de requisição JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pizzaria_ta',
  password: 'postgres',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados:', err.message);
  }
  console.log('Conexão bem-sucedida com o banco de dados');
  client.release(); // Libera o cliente de volta para o pool
});

// Rota para obter o menu
app.get('/menu', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM produto');
    const pizzas = result.rows;
    client.release();
    res.json(pizzas);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao consultar o banco de dados');
  }
});
app.get('/loginFunc', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM atendente');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota apenas para o método POST
app.post('/loginFunc', async (req, res) => {
  const { nome_atendente, senha_atendente } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM atendente WHERE nome_atendente = $1 AND senha_atendente = $2', [nome_atendente, senha_atendente]);
    client.release();

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      console.log()
      res.status(401).send('Credenciais inválidas');
    }
  } catch (error) {
    console.error('Erro ao executar consulta SQL:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Middleware para bloquear outras rotas
app.use((req, res, next) => {
  res.status(403).send('Acesso proibido');
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
