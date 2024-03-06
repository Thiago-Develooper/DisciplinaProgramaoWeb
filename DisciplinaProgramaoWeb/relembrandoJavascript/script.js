// Seleciona o título pelo ID
var titulo = document.getElementById('titulo');

// Adiciona um evento de clique ao título
titulo.addEventListener('click', function() {
    // Imprime uma mensagem no console
    console.log('Você clicou no título!');
});

// Adicionando um ouvinte de evento para o evento de clique
titulo.addEventListener('click', function() {
    // Alterando o conteúdo do h1 quando clicado
    titulo.textContent = 'Novo conteúdo do h1!';
  });

/*
var nome = prompt("Digite o nome")
var sobrenome = prompt("Digite o sobrenome")
//document.write("Bem vindo " + nome + " sobrenome " + sobrenome)
console.log("Bem vindo " + nome + " sobrenome " + sobrenome)
*/