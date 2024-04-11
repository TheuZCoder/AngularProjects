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

app.get('/menu/:id', async (req, res) => {
  const pizzaId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM produto WHERE id_pizza = $1', [pizzaId]);
    const pizza = result.rows[0]; // Assumindo que há apenas uma pizza com o ID específico
    client.release();

    if (pizza) {
      res.json(pizza);
    } else {
      res.status(404).send('Pizza não encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao consultar o banco de dados');
  }
});

app.put('/menu/:id', async (req, res) => {
  const id = req.params.id;
  const { nome_pizza, descricao_pizza, preco_pizza,image_pizza } = req.body; // Supondo que esses são os dados a serem atualizados

  try {
    const client = await pool.connect();
    const result = await client.query('UPDATE produto SET nome_pizza=$1,image_pizza=$2,descricao_pizza=$3, preco_pizza=$4 WHERE id_pizza=$5', [nome_pizza,image_pizza, descricao_pizza, preco_pizza, id]);
    client.release();

    if (result.rowCount === 1) {
      res.status(200).send('Pizza editada com sucesso!');
    } else {
      res.status(404).send('Pizza não encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao editar pizza');
  }
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

app.post('/menu', async (req, res) => {
  const { nome_pizza, image_pizza, descricao_pizza, preco_pizza } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO produto (nome_pizza, image_pizza, descricao_pizza, preco_pizza) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome_pizza, image_pizza, descricao_pizza, preco_pizza]
    );
    client.release();

    const novaPizza = result.rows[0];
    res.status(201).json(novaPizza);
  } catch (error) {
    console.error('Erro ao cadastrar pizza:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.delete('/menu/:id', (req, res) => {
  const id = req.params.id; 

  const query = 'DELETE FROM produto WHERE id_pizza = $1'

  pool.query(query, [id], (error, result) => {
    if (error) {
      console.error('Erro ao excluir pizza:', error);
      res.status(500).json({ error: 'Erro interno ao excluir pizza.' });
    } else {
      if (result.rowCount > 0) {
       
        res.status(200).json({ message: 'Pizza excluída com sucesso!' });
      } else {
     
        res.status(404).json({ error: 'Pizza não encontrada.' });
      }
    }
  });
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



app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
