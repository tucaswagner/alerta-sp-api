// api/index.js - VERSÃO SIMPLES
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'API funcionando!',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
