const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser"); // Importe o body-parser aqui
const cors = require("cors");

const app = express();
const port = 3000;

// Configurar o CORS para permitir todas as origens
app.use(cors());

// Configurar o body-parser para analisar corpos de requisição JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pizzaria_ta",
  password: "postgres",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao conectar ao banco de dados:", err.message);
  }
  console.log("Conexão bem-sucedida com o banco de dados");
  client.release(); // Libera o cliente de volta para o pool
});

//ROTA DE GET PARA LISTAR AS PIZZAS ANTES DE CONSEGUIR PUXAR O ID PARA EDIÇÃO
app.get("/menu/:id", async (req, res) => {
  const pizzaId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM produto WHERE id_pizza = $1",
      [pizzaId]
    );
    const pizza = result.rows[0]; // Assumindo que há apenas uma pizza com o ID específico
    client.release();

    if (pizza) {
      res.json(pizza);
    } else {
      res.status(404).send("Pizza não encontrada");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao consultar o banco de dados");
  }
});

//ROTA PARA EDITAR AS PIZZAS JA CADASTRADAS
app.put("/menu/:id", async (req, res) => {
  const id = req.params.id;
  const { nome_pizza, descricao_pizza, preco_pizza, image_pizza } = req.body; // Supondo que esses são os dados a serem atualizados

  try {
    const client = await pool.connect();
    const result = await client.query(
      "UPDATE produto SET nome_pizza=$1,image_pizza=$2,descricao_pizza=$3, preco_pizza=$4 WHERE id_pizza=$5",
      [nome_pizza, image_pizza, descricao_pizza, preco_pizza, id]
    );
    client.release();

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Pizza editada com sucesso!" });
    } else {
      res.status(404).json({ message: "Pizza não encontrada" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao editar pizza" });
  }
});

// Rota para obter o menu
app.get("/menu", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM produto");
    const pizzas = result.rows;
    client.release();
    res.json(pizzas);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao consultar o banco de dados");
  }
});

// ROTA PARA CADASTRAR NOVAS PIZZAS
app.post("/menu", async (req, res) => {
  const { nome_pizza, image_pizza, descricao_pizza, preco_pizza } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO produto (nome_pizza, image_pizza, descricao_pizza, preco_pizza) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome_pizza, image_pizza, descricao_pizza, preco_pizza]
    );
    client.release();

    const novaPizza = result.rows[0];
    res.status(201).json(novaPizza);
  } catch (error) {
    console.error("Erro ao cadastrar pizza:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

//ROTA PARA DELETAR PIZZAS
app.delete("/menu/:id", (req, res) => {
  const id = req.params.id;

  const query = "DELETE FROM produto WHERE id_pizza = $1";

  pool.query(query, [id], (error, result) => {
    if (error) {
      console.error("Erro ao excluir pizza:", error);
      res.status(500).json({ error: "Erro interno ao excluir pizza." });
    } else {
      if (result.rowCount > 0) {
        res.status(200).json({ message: "Pizza excluída com sucesso!" });
      } else {
        res.status(404).json({ error: "Pizza não encontrada." });
      }
    }
  });
});

//ROTA PARA PEGAR TODOS OS FUNCIONARIOS CADASTRADOS
app.get("/loginFunc", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM atendente");
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter clientes:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// ROTA PARA PEGAR FUNCIONARIO NO BANCO E COMPARAR COM AO COLOCADO NO LOGIN PARA PERMITIR LOGIN
app.post("/loginFunc", async (req, res) => {
  const { nome_atendente, senha_atendente } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM atendente WHERE nome_atendente = $1 AND senha_atendente = $2",
      [nome_atendente, senha_atendente]
    );
    client.release();

    if (result.rows.length > 0) {
      res.status(200).json({ message: "Login bem-sucedido" });
    } else {
      console.log();
      res.status(401).send("Credenciais inválidas");
    }
  } catch (error) {
    console.error("Erro ao executar consulta SQL:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

//ROTA PARA CADASTRAR NOVOS CLIENTES
app.post("/cadastroCliente", async (req, res) => {
  const {
    nome_cliente,
    email_cliente,
    endereco_cliente,
    telefone_cliente,
    senha_cliente,
  } = req.body;
  const client = await pool.connect();

  try {
    // Verificar se o email já está cadastrado
    const clienteExistente = await client.query(
      "SELECT * FROM clientes WHERE email_cliente = $1",
      [email_cliente]
    );

    if (clienteExistente.rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    // Inserir novo cliente no banco de dados
    const novoCliente = await client.query(
      "INSERT INTO clientes (nome_cliente, email_cliente, endereco_cliente, telefone_cliente, senha_cliente) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        nome_cliente,
        email_cliente,
        endereco_cliente,
        telefone_cliente,
        senha_cliente,
      ]
    );

    res.status(201).json({
      message: "Cliente cadastrado com sucesso",
      cliente: novoCliente.rows[0],
    });
  } catch (error) {
    console.error("Error during client registration:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
});

//GET PARA PEGAR OS CLIENTES CADASTRADOS
app.get("/loginCliente", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM clientes");
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter clientes:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

//ROTA PARA LOGIN DE CLIENTES
app.post("/loginCliente", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM clientes WHERE email_cliente = $1 AND senha_cliente = $2",
      [email, senha]
    );

    if (result.rows.length === 1) {
      res
        .status(200)
        .json({ message: "Login Autorizado", cliente: cliente.rows[0] });
    } else {
      res.status(401).json({ message: "Credenciais Invalidas" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ROTA PARA CADASTRAR NOVOS PEDIDOS
app.post("/pedidos/cliente_pedido", async (req, res) => {
  const { id_cliente, data_pedido, status_pedido, nome_pedido, id_pizza } =
    req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO Pedidos (id_cliente, data_pedido, status_pedido, nome_pedido, id_pizza) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_cliente, data_pedido, status_pedido, nome_pedido, id_pizza]
    );
    client.release();

    const novoPedido = result.rows[0];
    res.status(201).json(novoPedido);
  } catch (error) {
    console.error("Erro ao cadastrar pedido:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// ROTA PARA BUSCAR OS PEDIDOS FEITOS PELOS CLIENTES
app.get("/pedidos/cliente_pedido", async (req, res) => {
  try {
    const client = await pool.connect();
    const query = `
    SELECT
    Pedidos.id_pedido,
    Pedidos.data_pedido,
    Pedidos.status_pedido,
    Clientes.nome_cliente,
    ARRAY_AGG(Produto.nome_pizza) AS nome_pizzas,
    ARRAY_AGG(Produto.preco_pizza) AS precos_pizzas,
    SUM(Produto.preco_pizza) AS total_preco_pizzas
    FROM Pedidos
    INNER JOIN Clientes ON Pedidos.id_cliente = Clientes.id_cliente
    CROSS JOIN LATERAL (
    SELECT id_pizza
    FROM unnest(Pedidos.id_pizza) AS id_pizza
    ) AS id_pizza_expanded
    INNER JOIN Produto ON Produto.id_pizza = id_pizza_expanded.id_pizza
    WHERE Pedidos.id_pedido = Pedidos.id_pedido
    GROUP BY Pedidos.id_pedido, Pedidos.data_pedido, Pedidos.status_pedido, Clientes.nome_cliente;


    `;
    const result = await client.query(query);
    client.release();

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter pedidos dos clientes:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
