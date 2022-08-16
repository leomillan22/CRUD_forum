var usuarioModel = require("../models/usuarioModel");

function cadastrarUsuario (req, res){
    var nome = req.body.nomeUsuario; //elementos html 
    var email = req.body.emailUsuario;
    var classe = req.body.classeUsuario;
    var senha = req.body.senhaUsuario;

    usuarioModel.cadastrarUsuario(nome, email, senha, classe).then(
        function(resultado){
            res.json(resultado);
        }
    ).catch(
        function (error){
            console.log(error);
            console.log("Erro ao realizar o cadastro. Erro: ", error.sqlMessage);
            res.status(500).json(error.sqlMessage);
        }
    )
};
module.exports = {
    cadastrarUsuario
};