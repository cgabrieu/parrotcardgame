let ultimoCardVirado;
let cartas = [];
let cartasViradas = []; 

function checarNumero() {
    while(true){
        const qc = prompt("Escolha a quantidade de cartas (numero par entre 4 e 14): ");
        if (qc != undefined && qc > 3 && qc < 15 && qc % 2 == 0){
            embaralharCartas(Number(qc));
            break;
        }
    }
}

function embaralharCartas(quantidadeCartas) {
    let possivelEmb = ["bobross","explody","fiesta","metal","revertit","triplets", "unicorn"].sort(alet);

    for (let i = 0; i < (quantidadeCartas/2); i++) cartas.push(possivelEmb[i], possivelEmb[i]);
    
    desenharCartas(cartas.sort(alet));
}

function alet() {
    return Math.random() - 0.5;
}

function desenharCartas(cartas) {
    cartas.forEach(e => {
        document.querySelector("main").innerHTML += 
        `<div class="card" id=${e} onclick="virarCard(this)">
            <div class="front-face face flex-cc">
                <img src="assets/front.png" alt="Parrot">
            </div>
            <div class="back-face face flex-cc">
                <img src="assets/${e}parrot.gif">
            </div>
        </div>`;});    
}

function virarCard(card) {

    card.firstElementChild.classList.toggle("abrir");
    card.lastElementChild.classList.toggle("fechar");
}