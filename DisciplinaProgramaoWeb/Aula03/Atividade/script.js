function preencherVetor() {
    let vetor = [];

    // Acessando valores do campo do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    // Armazenamento de valores no vetor
    vetor.push(nome);
    vetor.push(idade);
    vetor.push(email);

    // Exibindo o vetor preenchido
    console.log("Vetor preenchido: ", vetor);
}
