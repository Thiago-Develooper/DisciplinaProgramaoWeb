function getId(id) {
    return document.getElementById(id);
}

const form = getId('serviceForm')
const list = getId('list')
const total = getId('total')

const servicosRegistrados = []

function addService(event) {
    event.preventDefault(); //Evita o comportamento padrão q o formulário tem

    const name = getId('name').value
    const type = getId('serviceType').value
    const value = parseFloat(getId('value').value)


    //Verificando entrada
    if (name.trim() === '' || type.trim() === '' || isNaN(value) || value <= 0) {
        alert('Preenche direito')
    }

    //Criando obj do serviço
    const newService = {
        cliente: name,
        tipo: type,
        valor: value
    }

    //Adicionando novo servico no array
    self.servicosRegistrados.push(newService)

    // Limpa o formulário
    form.reset()

    //atualiza relatório
    

}

function atualizarRelatorio() {
    // Limpeza da lista de relatórios
    list.innerHTML = '';

    let totalServicos = 0;

    //criando tags que vao add no html
    servicosRegistrados.forEach(function(servico, indice) {
        const itemRelatorio = document.createElement('div');
        itemRelatorio.classList.add('report-item');
        itemRelatorio.innerHTML = `
            <p><strong>Cliente:</strong> ${servico.cliente}</p>
            <p><strong>Tipo de Serviço:</strong> ${servico.tipo}</p>
            <p><strong>Valor:</strong> R$ ${servico.valor.toFixed(2)}</p>
        `;
        list.appendChild(itemRelatorio);

        // add ao valor total
        totalServicos += servico.valor;
    });

    // Atualiza
    totalServicosElemento.textContent = totalServicos.toFixed(2);
}

formularioServico.addEventListener('submit', adicionarServico);
