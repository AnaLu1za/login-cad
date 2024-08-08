// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
       
        window.location.href = 'cadastro.html';
    }
}
//Função de criação do array para armazenamento de dados
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
    }
    else{
        alert("Favor informar o nome");
    }
}

// FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++){ // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td></td></tr>"; // concatenar dados lista na posção i 
        document.getElementById('tabela').innerHTML = tabela; // coloca conteudo de variavel tabela em pagina html
    }
}
