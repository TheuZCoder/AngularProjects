const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Configurar o CORS para permitir todas as origens
app.use(cors());

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

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
