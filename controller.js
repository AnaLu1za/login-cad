// Validação de preenchimento do formulário de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
  
    // Verifica se os campos de email e senha estão preenchidos
    if (!loginEmail || !loginSenha) {
      alert('Favor preencher todos os campos');
    } else {
      alert('Campos preenchidos com sucesso');
      // Redireciona para a página de cadastro
      window.location.href = 'cadastro.html';
    }
  }
  
  // Array para armazenar os nomes dos usuários
  var dadosLista = [];
  
  // Função para salvar o nome do usuário no array e atualizar a lista
  function salvarUser() {
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
  }
  
  // Função para criar e atualizar a lista de usuários na tabela
  function criarLista() {
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