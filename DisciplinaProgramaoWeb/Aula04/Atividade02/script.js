//códigozao brabo
class SalesCalculator {
    constructor() {
        this.sales = [];
    }

    addSale(amount) {
        this.sales.push(amount);
    }

    getMaxSale() {
        return Math.max(...this.sales);
    }

    getAverageSale() {
        const total = this.sales.reduce((acc, cur) => acc + cur, 0);
        return total / this.sales.length || 0;
    }
}

const salesCalculator = new SalesCalculator();

const salesForm = document.getElementById('salesForm');
const maxSaleElement = document.getElementById('maxSale');
const averageSaleElement = document.getElementById('averageSale');

salesForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const saleAmount = parseFloat(document.getElementById('saleAmount').value);
    salesCalculator.addSale(saleAmount);
    maxSaleElement.textContent = salesCalculator.getMaxSale();
    averageSaleElement.textContent = salesCalculator.getAverageSale().toFixed(2);
});

const exportButton = document.getElementById('exportButton');
exportButton.addEventListener('click', function() {
    const salesList = document.createElement('ul');
    salesCalculator.sales.forEach(sale => {
        const listItem = document.createElement('li');
        listItem.textContent = sale;
        salesList.appendChild(listItem);
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.appendChild(salesList);
});
