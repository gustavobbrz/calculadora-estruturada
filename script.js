function setOperation(operation) {
    localStorage.setItem('operation', operation);
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = localStorage.getItem('operation');

    let result;

    switch (operation) {
        case 'SOMA':
            result = num1 + num2;
            break;
        case 'SUBTRAÇÃO':
            result = num1 - num2;
            break;
        case 'MULTIPLICAÇÃO':
            result = num1 * num2;
            break;
        case 'DIVISÃO':
            result = num1 / num2;
            break;
        default:
            result = 'Operação inválida';
    }

    document.getElementById('result').textContent = result;
    document.querySelector('.result-section').style.display = 'block';
}
