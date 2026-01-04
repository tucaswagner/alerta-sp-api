// api/index.js
module.exports = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API PRINCIPAL funcionando!",
    timestamp: new Date().toISOString(),
    user: "tucaswagner",
    note: "Acesse /api para outras rotas"
  });
};
