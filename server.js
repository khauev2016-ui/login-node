const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// "Banco de dados" fake
const users = [
  { id: 1, username: 'admin', password: '1234' },
  { id: 2, username: 'user', password: 'abcd' },
  { id: 3, username: 'khaue', password: 'khaue123' }
];

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validação de segurança
  if (
    !username ||
    !password ||
    username.includes(';') ||
    password.includes(';')
  ) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  // Verifica usuário
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Login ou senha incorretos' });
  }

  return res.status(200).json({ message: 'Login realizado com sucesso!' });
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});