
// api/hello.js - Função separada para teste
export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Vercel Function!",
    endpoint: "/api/hello"
  });
}
