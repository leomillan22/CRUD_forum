// NOS MODELS A GENTE FAZ QUALQUER INSTRUCAO DO SQL

var database = require("../database/config");
    //COMANDO DO BANCO DE DADOS
    function cadastrarUsuario(nome, email, senha, classe){
        var instrucao = `INSERT INTO usuario(nome, email, senha, classe) VALUES('${nome}', '${email}', '${senha}', '${classe}')`;

        return database.executar(instrucao);
    }
module.exports = {
    cadastrarUsuario
};