class CalculadoraMedia {
    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2  
    }

    calcularMedia() {
        return (n1 + n2) / 2
    }
}

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.presentDefault()

    const n1 = parseFloat(document.getElementById('n1').value)
    const n2 = parseFloat(document.getElementById('n2').value)

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = "Por favor, insira números válidos"
        return
    }
    
    const calculadora = new CalculadoraMedia(n1, n2);
    const media = calculadora.calcularMedia()
    
    document.getElementById('resultado').innerText = `A média dos números é: ${media}`
    
})

