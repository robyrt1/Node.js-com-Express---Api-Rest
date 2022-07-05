import mongoose from "mongoose";
/**
 * REGRA DE NOGÓCIO, REPOSNSÁVEL PELA ESCRITA, LEITURA E VALIDAÇÃO DE DADOS
 */
const livroSchema = new mongoose.Schema(
    {
        id:{type: String},
        titulo:{type: String, required : true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
        numeroPaginas:{type: Number}
    }
    );

    const Livros = mongoose.model('Livros', livroSchema)

export default Livros
