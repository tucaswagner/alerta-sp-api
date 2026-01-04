const express = require('express');
const app = express();

// Rota principal
app.get('/api', (req, res) => {
  res.json({ 
    message: 'API principal funcionando!',
    timestamp: new Date().toISOString(),
    endpoints: {
      hello: 'GET /api/hello',
      test: 'GET /api/test',
      upload: 'POST /api/upload (para imagens)'
    }
  });
});

// Rota /api/hello
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Olá! API funcionando perfeitamente!',
    status: 'success'
  });
});

// Rota /api/test
app.get('/api/test', (req, res) => {
  res.json({ 
    test: 'OK',
    api: 'funcionando',
    user: 'tucaswagner'
  });
});

// Rota para upload (que você precisa)
app.post('/api/upload', (req, res) => {
  res.json({
    success: true,
    message: 'Endpoint de upload pronto!',
    note: 'Configure o multer para receber imagens'
  });
});

// Export para Vercel
module.exports = app;
