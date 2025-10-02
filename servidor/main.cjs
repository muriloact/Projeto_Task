const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// Criar conexão
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'M@ct2002',
  database: 'db_app_tarefas'
});

// Testar conexão
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});


// Rota: listar usuários
app.get("/api/usuarios", (req, res) => {
  connection.query("SELECT * FROM login", (err, results) => {
    if (err) {
      res.status(500).json({ erro: "Erro ao buscar usuários" });
      return;
    }
    res.json(results);
  });
});

// Rota: adicionar usuário
app.post("/api/usuarios", (req, res) => {
  const { nomeLogin, emailLogin, senhaLogin } = req.body;
  connection.query(
    "INSERT INTO login (nomeLogin, emailLogin, senhaLogin) VALUES (?, ?, ?)",
    [nomeLogin, emailLogin, senhaLogin],
    (err, result) => {
      if (err) {
        res.status(500).json({ erro: "Erro ao cadastrar usuário" });
        return;
      }
      res.json({ id: result.insertId, nomeLogin, emailLogin });
    }
  );
});

// Rota: login
app.post("/api/login", (req, res) => {
  const { emailLogin, senhaLogin } = req.body;
  connection.query(
    "SELECT * FROM login WHERE emailLogin = ? AND senhaLogin = ?",
    [emailLogin, senhaLogin],
    (err, results) => {
      if (err) {
        res.status(500).json({ erro: "Erro ao realizar login" });
        return;
      }
      if (results.length > 0) {
        res.json({ sucesso: true, usuario: results[0] });
      } else {
        res.status(401).json({ sucesso: false, mensagem: "Credenciais inválidas" });
      }
    }
  );
});

// Iniciar servidor
app.listen(5000, () => {
  console.log("🚀 Servidor rodando na porta 5000");
});