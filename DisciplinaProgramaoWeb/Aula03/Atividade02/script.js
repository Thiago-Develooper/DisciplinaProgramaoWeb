var tabela = []

function getById(id) {
    return document.getElementById(id);
}

var btnCadastrar = getById("cadastrar");
var btnLimpar = getById("limpar");
var btnRemover = getById("remover");



btnCadastrar.addEventListener("click", cadastrar);
btnLimpar.addEventListener("click", limpar);
btnRemover.œaddEventListener("click", remover);



function cadastrar(event) {
    console.log("func executada cadastrar");

    event.preventDefault(); // Evita que o formulário seja submetido
œ

    var nomeVendedor = getById("nomeVendedor").value;
    var valorVenda = getById("valorVenda").value;

    console.log(nomeVendedor);
    console.log(valorVenda);

    const dados = {
        id: tabela.length + 1, // Use tabela.length para determinar o próximo ID
        nome: nomeVendedor,
        valor: Number(valorVenda),
        desconto: Number(valorVenda * 0.1)
    }

    tabela.push(dados);

    const newRow = document.createElement('tr');
    newRow.innerHTML = 
    `<td>${dados.id}</td>
    <td>${dados.nome}</td>
    <td>${dados.valor.toFixed(2)}</td>
    <td>${dados.desconto.toFixed(2)}</td>`;

    document.querySelector('tbody').appendChild(newRow);

    getById("nomeVendedor").value = "";
    getById("valorVenda").value = "";
}


function limpar(event) {
    event.preventDefault()
    console.log("func limpar() executada")

    getById("nomeVendedor").value = "";
    getById("valorVenda").value = "";
}

function remover(event) {
    event.preventDefault()
    console.log("func remover() executada")
    var table = getById("vendasTable").getElementsByTagName("tbody")[0];
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1);
    }
}

