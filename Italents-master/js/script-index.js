function consultaEndereco(){
    let cep = document.querySelector("#cep").value;
    if(cep.length != 8){
        alert("CEP invalido, o CEP deve conter obrigatoriamente 8 números !!");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        //console.log(response);
        response.json().then(function(data){
            //console.log(data);
            mostrarEndereco(data);
        });
    });
}

function mostrarEndereco(dados){
    let nomeLocalicacao = document.querySelector(".nome-localizacao");
    if(dados.erro){
        nomeLocalicacao.innerHTML = "CEP não encontrado !!"
    }else {
        //console.log(dados.localidade);
        nomeLocalicacao.innerHTML = dados.localidade;
    }
}