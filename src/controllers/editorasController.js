import editoras from "../models/Editora.js";

class EditoraController {
    static listarEditora = (_req, res) =>{
        editoras.find()
        .exec((err, editoras) =>{
            if(!err){
                res.status(200).json(editoras);
            }
        });
    };


    static listarEditoraPorId = (req, res) =>{
        const id = req.params.id;

        editoras.findById(id)
        .exec((err,editoras) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id não localizado`})
            }else{
                res.status(200).json(editoras);
            }
        })
    }


    static cadastrarEditora = (req, res) =>{
        let editora = new editoras(req.body);

        editora.save((err) =>{
            if(!err){
                res.status(201).send(editora.toJSON())
            }else{
                res.status(500).send({message: `${err.message} - Falha ao cadastrar editora`})
            }
        })
    }


    static atualizarEditora = (req, res) => {
        const id = req.params.id

        editoras.findByIdAndUpdate(id)
        .exec((err) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id não localizado`})
            }else{
                res.status(200).send({message: 'Editora atualizado com sucesso'});
            }
        })
    }

    static excluirEditora = (req, res) =>{
        const id = req.params.id

        editoras.findByIdAndDelete(id)
        .exec((err) =>{
            if(!err){
                res.status(200).send({message:'Editora excluido com sucesso'})
            }else{
                res.status(400).send({message: `${err.message} - id não localizado`})
            }
        })

        
    }

}


   
export default EditoraController;