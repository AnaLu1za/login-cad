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
  
    // Verifica se o campo de nome está preenchido
    if (nomeUser) {
      // Adiciona o nome ao array
      dadosLista.push(nomeUser);
      console.log(dadosLista); // Loga o array no console para verificação
  
      // Chama a função para criar ou atualizar a lista na tabela
      criarLista();
  
      // Limpa o campo de entrada de nome
      document.getElementById('nomeUser').value = "";
    } else {
      alert("Favor informar o nome");
    }
  }
  
  // Função para criar e atualizar a lista de usuários na tabela
  function criarLista() {
    // Obtém a referência à tabela e cria o cabeçalho
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
  
    // Percorre o array de usuários e cria uma linha para cada um
    for (let i = 0; i < dadosLista.length; i++) {
      // Cria uma nova linha e adiciona as células com o nome e os botões de ação
      tabela.innerHTML += `<tr><td>${dadosLista[i]}</td><td>
        <button onclick="editar(${i})">Editar</button>
        <button onclick="excluir(${i})">Excluir</button>
      </td></tr>`;
    }
  }
  
  // Função para excluir um usuário da lista e da tabela
  function excluir(i) {
    // Remove o elemento do array na posição indicada
    dadosLista.splice(i, 1);
  
    // Remove a linha correspondente da tabela
    document.getElementById('tabela').deleteRow(i + 1); // +1 pois o cabeçalho ocupa a linha 0
  }
  
  // Função para editar um usuário da lista
  function editar(i) {
    // Preenche o campo de entrada com o nome a ser editado
    document.getElementById("nomeUser").value = dadosLista[i];
  
    // Remove o item antigo do array e o adicionará novamente com o novo valor após a edição
    dadosLista.splice(i, 1);
  }