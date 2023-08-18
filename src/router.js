const express = require('express');

const funcoes = require('../controllers/funcions');

const rotas = express();

rotas.get('/listarFilmes', funcoes.listarFilmes);

rotas.get('/listarFilmes/:titulo', funcoes.tituloFilme);

rotas.post('/cadastrarFilme', funcoes.cadastrarFilme);

rotas.put('/atualizarFilme/:nome', funcoes.atualizarFilme);

rotas.patch('/atualizarFilme/:titulo/direcao', funcoes.atualizarDirecao);

rotas.delete('/excluirFilme/:titulo', funcoes.excluirFilme);

module.exports = rotas;
