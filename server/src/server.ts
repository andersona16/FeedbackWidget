import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única em uma entidade
// DELETE = Deletar uma informação

app.listen(3333, () => {
  console.log("HTTP server running!");
});
