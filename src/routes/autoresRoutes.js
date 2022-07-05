import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();//roteamendo do express

router
    .get("/autores", AutorController.listarAutor)
    .get("/autores/:id", AutorController.listaAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualiarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

    export default router;