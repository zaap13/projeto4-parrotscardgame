let qtdCards = 0;
const cards = [];
while (qtdCards < 4 || qtdCards > 14 || qtdCards % 2 !== 0) {
    qtdCards = prompt("Com quantas cartas você quer jogar?");
}

cardsIndex = document.querySelector(".cards");


for (i = 0; i < qtdCards; i++) {
    cards[i] = `<li class="memory-card">
                <img class="back-face"  src="images/parrot1.gif" alt="Verso da Carta">
                <img class="front-face" src="images/front.png" alt="Face da Carta">
            </li>`
                cardsIndex.innerHTML += cards[i];
}

const memoryCards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.add('flip');
}

memoryCards.forEach(card => card.addEventListener('click', flipCard));