
// api/test.js
export default function handler(req, res) {
  res.status(200).json({
    test: "ok",
    message: "Test endpoint working"
  });
}
