const valor1 = Math.floor(Math.random() * 10) + 1;
const valor2 = Math.floor(Math.random() * 10) + 1;

const elementovalor1 = document.getElementById('valor1');
elementovalor1.innerHTML = valor1;

const elementovalor2 = document.getElementById('valor2');
elementovalor2.innerHTML = valor2;

const valorTotal = tabuada(valor1, valor2);

function tabuada(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

