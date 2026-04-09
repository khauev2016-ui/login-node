👨‍💻 Aluno: Khaue Vieira
RA: 5168704  

# 🔐 Sistema de Login com Node.js

Este projeto é uma aplicação simples de autenticação de usuários utilizando Node.js. Ele permite cadastro e login de usuários, sendo ideal para estudos ou como base para sistemas maiores.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- HTML / CSS (frontend)
- (Opcional) Banco de dados (ex: MongoDB / JSON / SQLite)

## 📁 Estrutura do projeto


login-node/
│
├── backend/ # Código do servidor (API)
├── frontend/ # Interface do usuário
├── package.json
└── README.md


## ⚙️ Funcionalidades

- Cadastro de usuário
- Login com validação
- Comunicação entre frontend e backend
- Estrutura básica de autenticação

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/khauev2016-ui/login-node.git
cd login-node
2. Instale as dependências
npm install
3. Inicie o servidor
node server.js

ou (se usar nodemon):

npx nodemon server.js
4. Acesse no navegador
http://localhost:3000
📌 Endpoints (exemplo)
Método	Rota	Descrição
POST	/register	Cadastro de usuário
POST	/login	Login do usuário
GET	/usuarios	Lista de usuários
🔒 Sobre autenticação

Este projeto implementa uma autenticação simples. Em aplicações reais, recomenda-se:

Criptografar senhas (bcrypt)
Usar JWT para autenticação
Validar entradas de dados
Implementar proteção contra ataques
🧠 Objetivo

Projeto desenvolvido para fins acadêmicos, com o objetivo de praticar:

Desenvolvimento backend com Node.js
Integração frontend + backend
Conceitos básicos de autenticação
📌 Melhorias futuras
Integração com banco de dados
Sistema de autenticação com JWT
Interface mais moderna
Validação de formulário
Deploy online

