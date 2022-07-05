import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();//roteamendo do express

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.buscarId)
    .post("/livros", LivroController.cadastrarLivros)
    .put("/livros/:id", LivroController.atualiarLivros)
    .delete("/livros/:id", LivroController.excluirLivro)

    export default router
