// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const cadastroSala = require('./src/controllers/cadastroSala');
const cadastroAluno = require('./src/controllers/cadastroAluno');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/cadastroAlunos', cadastroAluno.aluno);
route.get('/cadastroSala', cadastroSala.sala);
route.post('/cadastroSala', cadastroSala.salaInsert);





module.exports = route;