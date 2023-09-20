import express, { Request, Response } from "express";

const app = express();

app.use(express.json()); // o backend consiga interpretar o formato JSON

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  //req.headers - confgurações e chaves de autorização
  //req.body - conjunto de dados que está sendo fornecido como corpo da requisição
  //req.params -parâmentro estáticos de rota
  //req.query - query params
  console.log(req.headers);
  console.log(req.body);
  // return res.send("Created successfully.")
  return res.status(201).json({ message: "Created successfully." });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
