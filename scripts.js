let ultimoCardVirado, cartas = [], jogadas = 0, acertos = 0, segundos = 0;

function animacao(card) {
    card.firstElementChild.classList.toggle("vira-um");
    card.lastElementChild.classList.toggle("vira-dois");
}

function aleat() {
    return Math.random() - 0.5;
}

function tique() {
    segundos += 0.005;
    document.querySelector("time span").innerHTML = segundos.toFixed(2);
}

function checarNumero() {
    let qc;
    do {
        qc = prompt("Escolha a quantidade de cartas (número par entre 4 e 14): ");
    } while (qc < 4 || qc > 14 || qc % 2 !== 0);
    embaralharCartas(Number(qc));
}

function embaralharCartas(quantidadeCartas) {
    let possivelEmb = ["bobross","explody","fiesta","metal","revertit","triplets", "unicorn"].sort(aleat);

    for (let i = 0; i < (quantidadeCartas/2); i++) cartas.push(possivelEmb[i], possivelEmb[i]);
    desenharCartas(cartas.sort(aleat));
}

function desenharCartas(cartas) {
    cartas.forEach(e => {
        document.querySelector("main").innerHTML += 
        `<div class="card" id=${e} onclick="virarCard(this)">
            <div class="front-face face flex-cc"> <img src="assets/front.png" alt="Parrot"> </div>
            <div class="back-face face flex-cc"> <img src="assets/${e}parrot.gif"> </div>
        </div>`;});
}

function virarCard(card) {
    if (ultimoCardVirado == card) return;

    if (ultimoCardVirado == undefined) {
        ultimoCardVirado = card;
        animacao(card);
    } else if (ultimoCardVirado.id != card.id) {
        animacao(card);
        setTimeout(animacao, 1000, ultimoCardVirado);
        setTimeout(animacao, 1000, card);
        ultimoCardVirado = null;
        jogadas++;
    } else {
        animacao(card);
        ultimoCardVirado = null;
        jogadas++;
        acertos++;
        checarFinal(time);
    }

    if (jogadas === 0) {
        time = setInterval(tique, 5);
    }
}

function checarFinal(time) {
    if (acertos == cartas.length/2) {
        setTimeout(confirm, 200,`Você venceu em ${segundos.toFixed(2)}s e ${jogadas} jogadas!`);
        clearInterval(time);
        //window.location.reload();
    }
}