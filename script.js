let qtdCards = 0;
const cards = [];
let cont = 0;
endGame = 0;

window.onload = (startTimer);

while (qtdCards < 4 || qtdCards > 14 || qtdCards % 2 !== 0) {
    qtdCards = prompt("Com quantas cartas você quer jogar? Insira um número par de 4 a 14!");
}

const cardsIndex = document.querySelector(".cards");

for (i = 0; i < (qtdCards / 2); i++) {
    cards[i] = `<li class="memory-card" data-parrot="parrot${i}">
                <img class="back-face"  src="./images/parrot${i}.gif" alt="Verso da Carta">
                <img class="front-face" src="./images/front.png" alt="Face da Carta">
            </li>`
    cards[i + (qtdCards / 2)] = `<li class="memory-card" data-parrot="parrot${i}">
                <img class="back-face"  src="./images/parrot${i}.gif" alt="Verso da Carta">
                <img class="front-face" src="./images/front.png" alt="Face da Carta">
            </li>`

}

function comparador() {
    return Math.random() - 0.5;
}

cards.sort(comparador);

for (i = 0; i < qtdCards; i++) {
    cardsIndex.innerHTML += cards[i];
}

const memoryCards = document.querySelectorAll('.memory-card');

let reveal = false;
let firstCard = '';
let secondCard = '';
let block = false;

function flipCard() {
    if (block) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    cont++;

    if (!reveal) {
        reveal = true;
        firstCard = this;
        return;
    } else {
        secondCard = this;
        reveal = false;
        checkCards();
        return;
    }
}

function checkCards() {
    if (firstCard.dataset.parrot === secondCard.dataset.parrot) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        firstCard = '';
        secondCard = '';
        endGame += 2;
        if (endGame == (qtdCards)){
            clearInterval(this.loop);
            reset = prompt(`Parabéns, você venceu em ${cont} lances e ${timer.innerHTML} segundos!
            Gostaria de reiniciar o jogo?`);
            if (reset === 'sim'){
                document.location.reload(true);
            }
        }
    } else {
        unflip();
    }
}

function unflip() {
    block = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      block = false;
      firstCard = '';
      secondCard = '';
    }, 1000);
  }

memoryCards.forEach(card => card.addEventListener('click', flipCard));

const timer = document.querySelector('.timer');

function startTimer (){
    this.loop = setInterval(() => {

        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;

    }, 1000)
}

