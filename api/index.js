module.exports = (req, res) => {
  res.json({ 
    message: "API principal!",
    endpoints: ["/api/hello", "/api/test"]
  });
};
