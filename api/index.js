const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurar multer para /tmp (Vercel)
const upload = multer({
  dest: '/tmp/',
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

// Criar pasta temporária se não existir
if (!fs.existsSync('/tmp/uploads')) {
  fs.mkdirSync('/tmp/uploads', { recursive: true });
}

// ===== ROTAS =====

// Rota principal
app.get('/api', (req, res) => {
  res.json({ 
    success: true,
    message: 'API de Upload funcionando!',
    user: 'tucaswagner',
    endpoints: {
      hello: 'GET /api/hello',
      test: 'GET /api/test',
      upload: 'POST /api/upload (campo: "imagem")'
    }
  });
});

// Rota de teste
app.get('/api/hello', (req, res) => {
  res.json({ message: 'API funcionando perfeitamente!' });
});

app.get('/api/test', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota de UPLOAD (IMPORTANTE!)
app.post('/api/upload', upload.single('imagem'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        error: 'Nenhuma imagem enviada. Use o campo "imagem"' 
      });
    }

    // Criar resposta
    const response = {
      success: true,
      message: 'Upload realizado com sucesso!',
      file: {
        filename: req.file.filename,
        originalname: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: `/api/file/${req.file.filename}`
      },
      downloadUrl: `https://${req.headers.host}/api/file/${req.file.filename}`
    };

    res.json(response);
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Rota para baixar arquivo
app.get('/api/file/:filename', (req, res) => {
  const filePath = path.join('/tmp/', req.params.filename);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ 
      success: false, 
      error: 'Arquivo não encontrado' 
    });
  }
});

// Export para Vercel
module.exports = app;
