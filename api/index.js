// api/index.js - Formato oficial Vercel
export default function handler(req, res) {
  // Log para debug
  console.log(`Request: ${req.method} ${req.url}`);
  
  // Resposta JSON
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET' && req.url === '/') {
    res.status(200).json({
      success: true,
      message: "API principal funcionando!",
      timestamp: new Date().toISOString(),
      endpoints: {
        main: "/",
        hello: "/api/hello",
        test: "/api/test"
      }
    });
  } else {
    res.status(404).json({
      error: "Endpoint não encontrado",
      requested: req.url
    });
  }
}
