var postModel = require("../models/postModel");

function criaPost (req, res){
    var titulo = req.body.tituloPost;
    var conteudo = req.body.conteudoPost;

    postModel.criaPost(titulo, conteudo).then(
        function(resultado){
            res.json(resultado);
        }
    ).catch (
        function(error){
        console.log(error);
        console.log("Erro ao cadastrar post. Erro ", error.sqlMessage);
        res.status(500).json(error.sqlMessage);
        }
    )
};
module.exports = {
    criaPost
};