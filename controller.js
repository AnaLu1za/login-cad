// Validação de preenchimento do formulário de login
    function acessar() {
      let loginEmail = document.getElementById('loginEmail').value;
      let loginSenha = document.getElementById('loginSenha').value;
   
   // Verifica se os campos de email e senha estão preenchidos
      if (!loginEmail || !loginSenha) {
          alert('Favor preencher todos os campos');
      } else {
          alert('Campos preenchidos com sucesso');
          window.location.href = 'cadastro.html';
      }
  }
   
  // Função de criação do array para armazenamento de dados
   
  var dadosLista = [];
  var emailLista = [];
  var cpflista = [];
  
 // Função para salvar o nome do usuário no array e atualizar a lista
  function salvarUser() {
      let nomeUser = document.getElementById('nomeUser').value;
      let emailUser = document.getElementById('emailUser').value;
      let cpfUser = document.getElementById('cpfUser').value;
   
      if (nomeUser && emailUser && emailUser.includes('@') && emailUser.includes('.') && validarCPF(cpfUser)) {
          dadosLista.push(nomeUser);
          emailLista.push(emailUser);
          cpflista.push(cpfUser);
          criarLista();
          document.getElementById('nomeUser').value = "";
          document.getElementById('emailUser').value = "";
          document.getElementById('cpfUser').value = "";
      } else {
          if (!validarCPF(cpfUser)) {
              alert("Coloque um CPF válido");
          } else {
              alert("Favor informar o nome e email corretamente");
          }
      }
  }
  // Função de criação de lista
  function criarLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td>" + cpflista[i] + "</td><td><button onclick='excluir(" + (i + 1) + ")'>Excluir</button> <button onclick='editar(" + (i + 1) + ")'>Editar</button></td></tr>";
    }
    document.getElementById('tabela').innerHTML = tabela;
}
 
// Função para excluir nome da lista
function excluir(i) {
    dadosLista.splice((i - 1), 1);
    emailLista.splice((i - 1), 1);
    cpflista.splice((i - 1), 1);
    criarLista();
}
 
// Função para editar nome e email da lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emailLista[(i - 1)];
    document.getElementById("cpfUser").value = cpflista[(i - 1)];
 
    dadosLista.splice((i - 1), 1);
    emailLista.splice((i - 1), 1);
    cpflista.splice((i - 1), 1);
 
    criarLista();
}
 


// Validação de CPF
  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
 
    let soma = 0;
    let resto;
 
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
 
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
 
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
 
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    return resto === parseInt(cpf.substring(10, 11));
}
 
  