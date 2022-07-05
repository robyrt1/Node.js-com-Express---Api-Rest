import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        cnpj: {type: String , required: true},
        nome: {type: String, required: true},
    }
);

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;