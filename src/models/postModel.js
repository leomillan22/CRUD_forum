var database = require("../database/config");

function criaPost(titulo, conteudo){
    var instrucao = `INSERT INTO post(titulo, conteudo) VALUES('${titulo}', '${conteudo}')`;

    return database.executar(instrucao);
}

module.exports = {
    criaPost
};