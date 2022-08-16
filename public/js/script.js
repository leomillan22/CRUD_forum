function cadastrarUsuario (){
   
    var nameUser = input_usuario.value;
    var passwordUser = senha_usuario.value;
    var classUser = classe_usuario.value;
    var emailUser = email_usuario.value;

    fetch("/usuario/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeUsuario: nameUser, // aqui eu troco pelo getElementByID pra pegar o value no front e jogar pro backend?
          senhaUsuario: passwordUser,
          classeUsuario: classUser,
          emailUsuario: emailUser
        })
      }).then(function (resposta) {
          if (resposta.ok) {
            alert("funcionou")
            window.location = "./html/main.html"; // AO CLICAR NO SUBMIT, CARREGA A PAGINA MAIN
          }
        }
      ).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
};
