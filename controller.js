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
<<<<<<< HEAD
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
=======
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value; 
    // Verifica se o campo de nome está preenchido
    if (nomeUser && emailUser) {
    // Adiciona validação de e-mail
      if (emailUser.includes('@') && emailUser.includes('.')){
        dadosLista.push({nome: nomeUser, email: emailUser}); // Adiciona nome e e-mail ao array
        console.log(dadosLista); // Loga o array no console para verificação
        criarLista(); // Chama a função para criar ou atualizar a lista na tabela
        document.getElementById('nomeUser').value = ""; // Limpa o campo de entrada de nome
        document.getElementById('emailUser').value = ""; // Limpa o campo de entrada de e-mail
    } else {
      alert("Favor informar um e-mail válido");
    }
    } else {
      alert("Favor preencher todos os campos");
    }
>>>>>>> a99863a435f964377a3c5f16c62002bc89d17d04
  }
  // Função de criação de lista
  function criarLista() {
<<<<<<< HEAD
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
 
  
=======
      let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
      for (let i = 0; i < dadosLista.length; i++) {
          tabela += `<tr>
              <td>${dadosLista[i].nome}</td>
              <td>${dadosLista[i].email}</td>
              <td>
                  <button type='button' onclick='editar(${i})' class='btn btn-warning btn-sm'>Editar</button>
                  <button type='button' onclick='excluir(${i})' class='btn btn-danger btn-sm'>Excluir</button>
              </td>
          </tr>`;
      }
      document.getElementById('tabela').innerHTML = tabela;
  }
  
  
  // Função para editar um usuário da lista
  function editar(i) {
    // Preenche o campo de entrada com o nome e email a ser editado
    document.getElementById("nomeUser").value = dadosLista[i].nome;
    document.getElementById("emailUser").value = dadosLista[i].email;
    // Remove o item antigo do array e o adicionará novamente com o novo valor após a edição
    dadosLista.splice(i, 1);
    criarLista();
  }
    // Função para excluir um usuário da lista e da tabela
    function excluir(i) {
      // Remove o elemento do array na posição indicada
      dadosLista.splice(i, 1);
    
      // Remove a linha correspondente da tabela
      document.getElementById('tabela').deleteRow(i + 1); // +1 pois o cabeçalho ocupa a linha 0
    }
>>>>>>> a99863a435f964377a3c5f16c62002bc89d17d04
