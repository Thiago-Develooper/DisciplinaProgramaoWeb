function calcularParcelas() {
    var total = parseFloat(document.getElementById('total').value);
    var parcelas = parseInt(document.getElementById('parcelas').value);
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    if (isNaN(total) || total <= 0 || isNaN(parcelas)) {
      resultadoDiv.innerHTML = 'Por favor, insira valores válidos.';
      return;
    }
  
    if (parcelas <= 1) {
      total *= 0.9; 
      resultadoDiv.innerHTML = 'Valor Total com Desconto: R$ ' + total.toFixed(2);
      return;
    }
  
    var valorParcela = total;
    var juros = 0;
  
    if (parcelas <= 3) {
      juros = 0.05;
    } else {
      juros = 0.1;
    }
  
    valorParcela = (total * (1 + juros)) / parcelas;
  
    for (var i = 0; i < parcelas; i++) {
      var valorParcelaComJuros = valorParcela.toFixed(2);
      resultadoDiv.innerHTML += 'Parcela ' + (i + 1) + ': R$ ' + valorParcelaComJuros + '<br>';
    }
  }
  