
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numero === valorTotal) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O valor era ${valorTotal}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > valorTotal) {
        elementoChute.innerHTML += `
        <div>O valor é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O valor é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});