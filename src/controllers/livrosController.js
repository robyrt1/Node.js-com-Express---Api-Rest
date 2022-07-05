import livros from "../models/Livro.js";

/**
 *  métodos no tipo static para que não precisemos instanciar essa classe.
 */
class LivroController {

  static listarLivros = (_req, res) => {
    livros.find()
      .populate(('autor'))
      .populate(('editora'))
      .exec((_err, livro) => { 
      res.status(200).json(livro);
    });
  };
  
  static buscarId = (req, res)=>{
    const id = req.params.id;
    livros.findById(id)
      .populate('autor', 'nome')
      .exec((err, livros) =>{
      if(err){
        res.status(400).send({message: `${err.message} - id do livro não localizado`})
      }else{
        res.status(200).send(livros)
      }
    })
  }
  
  static cadastrarLivros = (req, res) =>{
    let livro = new livros (req.body);
    livro.save((err) =>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro `})
      }else{
        res.status(201).send(livro.toJSON())//CONVERTER EM JSON E ENVIAR PARA O USUARIO 
      }
    });
  };
  
  static atualiarLivros  = (req, res) =>{
    const id = req.params.id;
      //localiza pelo id e atualiza
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err){
        res.status(200).send({message:'Livro atualizado com Sucesso'})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLivro = (req, res) =>{
    const id = req.params.id

    livros.findByIdAndDelete(id,(err) =>{
      if(err){
        res.status(400).send({message: `${err.message} - id não localizado`})
      }else{
        res.status(200).send({message: 'Livro excluido com sucesso'})
      }
    })
  }

  static listarLivroPorEditora = (req,res) =>{
    const editora = req.query.editora

    livros.find({'editora': editora}, {},(err, livros) =>{
      res.status(200).send(livros);
    })
  }

}


export default LivroController;
