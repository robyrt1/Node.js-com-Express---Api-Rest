import autores from "../models/Autor.js";

class AutorController {
  
    static listarAutor = (_req, res) => {
      autores.find((_err,autores) => { 
        res.status(200).json(autores);
      });
    };
    
    static listaAutorPorId = (req, res)=>{
      const id = req.params.id;
      autores.findById(id,(err, autores) =>{
        if(err){
          res.status(400).send({message: `${err.message} - id do autor não localizado`})
        }else{
          res.status(200).send(autores)
        }
      })
    }
    
    static cadastrarAutor = (req, res) =>{
      let autor = new autores (req.body);
      autor.save((err) =>{
        if(err){
          res.status(500).send({message: `${err.message} - falha ao cadastrar autor `})
        }else{
          res.status(201).send(autor.toJSON())//CONVERTER EM JSON E ENVIAR PARA O USUARIO 
        }
      });
    };
    
    static atualiarAutor  = (req, res) =>{
      const id = req.params.id;
        //localiza pelo id e atualiza
      autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err){
          res.status(200).send({message:'Autor atualizado com Sucesso'})
        }else{
          res.status(500).send({message: err.message})
        }
      })
    }
  
    static excluirAutor = (req, res) =>{
      const id = req.params.id
  
      autores.findByIdAndDelete(id,(err) =>{
        if(err){
          res.status(400).send({message: `${err.message} - id não localizado`})
        }else{
          res.status(200).send({message: 'Autor excluido com sucesso'})
        }
      })
    }
  
  }

  export default AutorController;