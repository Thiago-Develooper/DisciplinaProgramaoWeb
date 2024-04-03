// Facilita a minhja vida
function getId(id) {
    return document.getElementById(id);
}

const form = getId('serviceForm');
const list = getId('list');
const total = getId('total');

const servicosRegistrados = [];

function addService(event) {
    event.preventDefault(); //Evita o comportamento padrão que o formulário tem

    const name = getId('name').value;
    const type = getId('serviceType').value;
    const value = parseFloat(getId('value').value);

    // Verificando entrada
    if (name.trim() === '' || type.trim() === '' || isNaN(value) || value <= 0) {
        alert('Preencha corretamente todos os campos do formulário.');
        return; // Retorna para evitar adicionar serviço inválido
    }

    // cria o objeto do serviço
    const newService = {
        cliente: name,
        tipo: type,
        valor: value
    };

    // Adicionando novo serviço no array
    servicosRegistrados.push(newService);

    // Limpa o formulário
    form.reset();

    // Atualiza relatório
    atualizarRelatorio();
}

function atualizarRelatorio() {
    // Limpa a lista de relatórios
    list.innerHTML = '';

    let totalServicos = 0;

    // Cria o código a ser adicionado no html
    servicosRegistrados.forEach(function(servico, indice) {
        const itemRelatorio = document.createElement('div');
        itemRelatorio.classList.add('report-item');
        itemRelatorio.innerHTML = `
        <div class="opakk">
            <p><strong>Cliente:</strong> ${servico.cliente}</p>
            <p><strong>Tipo de Serviço:</strong> ${servico.tipo}</p>
            <p><strong>Valor:</strong> R$ ${servico.valor.toFixed(2)}</p>
            </div>
        `;
        list.appendChild(itemRelatorio);

        // Atualiza o valor total
        totalServicos += servico.valor;
    });

    total.textContent = totalServicos.toFixed(2);
}

form.addEventListener('submit', addService);
