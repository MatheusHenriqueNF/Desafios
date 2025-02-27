(function(apiUrl) {
  function fetchParrotsCount() {
    return fetch(apiUrl + "/messages/parrots-count")
      .then(function(response) {
        return response.json();
      })
      .then(function(count) {
        document.getElementById("parrots-counter").innerHTML = count;
      });
  }

  function listMessages() {
    // Faz um request para a API de listagem de mensagens
    fetch(apiUrl + "/messages") // Faz um request para a API de listagem de mensagens
      .then(function(response){//Recebe a resposta da API
        return response.json(); // Converte a resposta para JSON
      })
      
      // Atualiza a o conteúdo da lista de mensagens
      .then(function(messagem){//Recebe a resposta convertida
        const messagemList = document.getElementById("messages-list");//Pega a lista de mensagens
        messagemList.innerHTML = "";//Limpa a lista de mensagens

        messagem.forEach(function(messagem){
          const messagemItem = document.createElement("li");//Cria um item de lista
          messagemItem.innerHTML = messagem.text;//Adiciona o texto da mensagem no item de lista
          messagemList.appendChild(messagemItem);//Adiciona o item de lista na lista de mensagens
        });
      });

    
    // Deve ser chamado a cada 3 segundos
  }

  function parrotMessage(messageId) {
    // Faz um request para marcar a mensagem como parrot no servidor
    // Altera a mensagem na lista para que ela apareça como parrot na interface
  }

  function sendMessage(message, authorId) {
    // Manda a mensagem para a API quando o usuário envia a mensagem
    // Caso o request falhe exibe uma mensagem para o usuário utilizando Window.alert ou outro componente visual
    // Se o request for bem sucedido, atualiza o conteúdo da lista de mensagens
    
  }

  function getMe() {
    // Faz um request para pegar os dados do usuário atual
    // Exibe a foto do usuário atual na tela e armazena o seu ID para quando ele enviar uma mensagem
  }

  function initialize() {
    fetchParrotsCount();
    listMessages();
    setInterval(listMessages, 3000); // Atualiza a lista de mensagens a cada 3 segundos
  }

  initialize();
})("https://tagchatter.herokuapp.com");