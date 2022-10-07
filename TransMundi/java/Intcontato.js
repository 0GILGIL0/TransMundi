const formulario = document.querySelector("#formCont");

function test(){
    formulario.onsubmit = event => {

        var nome = document.querySelector("#nome").value
        //Validar o Input nome
        if (nome === ""){
        event.preventDefault()
        alert("Erro: digite o seu nome.")
        return
        }
    
        var sobrenome = document.querySelector("#sobrenome").value
        //Validar o Input sobrenome
        if (sobrenome === ""){
        event.preventDefault()
        alert("Erro: digite o seu sobrenome.")
        return
        }
    
        var cpf = document.querySelector("#cpf").value
        //Validar o Input cpf
        if (cpf === ""){
        event.preventDefault()
        alert("Erro: digite o seu cpf.")
        return
        }
    
        var cep = document.querySelector("#cep").value
        //Validar o Input cep
        if (cep === ""){
        event.preventDefault()
        alert("Erro: digite o seu cep.")
        return
        }
    
        var email = document.querySelector("#email").value
        //Validar o Input email
        if (email === ""){
        event.preventDefault()
        alert("Erro: digite o seu email.")
        return
        }
        
        var tel = document.querySelector("#tel").value
        //Validar o Input tel
        if (tel === ""){
        event.preventDefault()
        alert("Erro: digite o seu telefone.")
        return
        }
        
        var mensagem = document.querySelector("#mensagem").value
        //Validar o Input msg
        if (mensagem === ""){
        event.preventDefault()
        alert("Erro: digite uma mensagem")
        return
        }
        
        var assunto = document.querySelector("#assunto").value
        //Validar o Input assunto
        if (assunto === ""){
        event.preventDefault()
        alert("Erro: escolha um assunto.")
        return
        } else{
            document.getElementById("msgErro")
            
        }

        //Mensagem de Envio Concluido.
        var pegarElemento = document.getElementById("#botao");        
        alert("Seu foi enviado com sucesso.")
        event.preventDefault();
        }
}

