import express from "express";
import livros from "../routes/livrosRoutes.js";
import autores from "./autoresRoutes.js";
import editoras from "./editorasRoutes.js"

/**
 * 
 * concentração de todas as rotas que irei utilizar na aplicação 
 */
const routes = (app) =>{

    app.route('/').get((_req, res)=>{
        res.status(200).send({titulo: "Curso de node"})
    })
// rota de listros disponível 

    app.use(
        express.json(),
        livros,
        autores,
        editoras,
    )
}

export default routes