import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// Recebe a imagem do Kodular
app.post("/processar", upload.single("file"), async (req, res) => {
  try {
    // Caminho da imagem enviada
    const inputPath = req.file.path;

    // Para testar, vamos só devolver a mesma imagem sem modificar
    const outputPath = inputPath;

    res.sendFile(outputPath, { root: "." });
  } catch (err) {
    res.status(500).json({ error: "Erro ao processar imagem" });
  }
});

// Porta automática do Render
app.listen(process.env.PORT || 3000, () => {
  console.log("API rodando!");
});
