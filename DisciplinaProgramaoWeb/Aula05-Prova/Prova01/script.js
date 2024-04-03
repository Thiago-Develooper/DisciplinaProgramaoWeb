// Variáveis de referência aos elementos HTML
const formularioServico = document.getElementById('service-form');
const listaRelatorios = document.getElementById('report-list');
const totalServicosElemento = document.getElementById('total');

// Array para armazenar os serviços registrados
const servicosRegistrados = [];

// Função para adicionar serviço
function adicionarServico(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Captura dos valores do formulário
    const nomeCliente = document.getElementById('client-name').value;
    const tipoServico = document.getElementById('service-type').value;
    const valorServico = parseFloat(document.getElementById('service-value').value);

    // Verificação se os campos foram preenchidos corretamente
    if (nomeCliente.trim() === '' || tipoServico.trim() === '' || isNaN(valorServico) || valorServico <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Criação de um objeto representando o serviço
    const novoServico = {
        cliente: nomeCliente,
        tipo: tipoServico,
        valor: valorServico
    };

    // Adição do novo serviço ao array de serviços registrados
    servicosRegistrados.push(novoServico);

    // Limpeza do formulário
    formularioServico.reset();

    // Atualização do relatório
    atualizarRelatorio();
}

// Função para atualizar o relatório de serviços
function atualizarRelatorio() {
    // Limpeza da lista de relatórios
    listaRelatorios.innerHTML = '';

    // Variável para armazenar o valor total dos serviços
    let totalServicos = 0;

    // Iteração sobre os serviços registrados para criar as entradas do relatório
    servicosRegistrados.forEach(function(servico, indice) {
        const itemRelatorio = document.createElement('div');
        itemRelatorio.classList.add('report-item');
        itemRelatorio.innerHTML = `
            <p><strong>Cliente:</strong> ${servico.cliente}</p>
            <p><strong>Tipo de Serviço:</strong> ${servico.tipo}</p>
            <p><strong>Valor:</strong> R$ ${servico.valor.toFixed(2)}</p>
        `;
        listaRelatorios.appendChild(itemRelatorio);

        // Adiciona o valor do serviço ao total
        totalServicos += servico.valor;
    });

    // Atualiza o valor total na interface
    totalServicosElemento.textContent = totalServicos.toFixed(2);
}

// Event listener para o evento submit do formulário
formularioServico.addEventListener('submit', adicionarServico);
