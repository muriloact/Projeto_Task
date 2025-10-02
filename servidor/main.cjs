const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// Criar conexão
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'M@ct2002',
  database: 'db_app_tarefas'
});

// Testar conexão
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});


// Rota: listar usuários
app.get("/api/usuarios", (req, res) => {
  db.query("SELECT * FROM login", (err, results) => {
    if (err) {
      res.status(500).json({ erro: "Erro ao buscar usuários" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/cadastro-usuario", (req, res) => {
  const { nome, email, senha } = req.body;

  console.log("Dados recebidos no backend:", { nome, email, senha });

  const sql = "INSERT INTO login (nomeLogin, emailLogin, senhaLogin) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error("Erro SQL:", err);
      res.status(500).json({ erro: "Erro ao cadastrar usuário", detalhe: err.sqlMessage });
      return;
    }
    res.json({ message: "Usuário cadastrado com sucesso!", id: result.insertId });
  });
});

// Rota: login
app.post("/api/login", (req, res) => {
  const { loginEmail, loginSenha } = req.body;
  console.log("Dados recebidos no backend", {loginEmail,loginSenha})
  const sql = "SELECT * FROM login WHERE emailLogin = ? AND senhaLogin = ?";
  db.query(sql, [loginEmail, loginSenha], (err, result) => {
    if (err) return res.status(500).json({ error: "Erro no login" });
    if (result.length === 0) return res.status(401).json({ error: "E-mail ou senha incorretos" });
    res.json(result[0]);
  });
});

// Iniciar servidor
app.listen(5000, () => {
  console.log("🚀 Servidor rodando na porta 5000");
});