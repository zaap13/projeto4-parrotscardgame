let qtdCards = 0;
const cards = [];
while (qtdCards < 4 || qtdCards > 14 || qtdCards % 2 !== 0) {
    qtdCards = prompt("Com quantas cartas você quer jogar?", "Insira um número par de 4 a 14");
}

cardsIndex = document.querySelector(".cards");


for (i = 0; i < (qtdCards / 2); i++) {
    cards[i] = `<li class="memory-card">
                <img class="back-face"  src="images/parrot${i}.gif" alt="Verso da Carta">
                <img class="front-face" src="images/front.png" alt="Face da Carta">
            </li>`
    cards[i+(qtdCards/2)] = `<li class="memory-card">
                <img class="back-face"  src="images/parrot${i}.gif" alt="Verso da Carta">
                <img class="front-face" src="images/front.png" alt="Face da Carta">
            </li>`
    
}

function comparador() { 
	return Math.random() - 0.5; 
}

cards.sort(comparador);

for (i=0; i<qtdCards; i++) {
    cardsIndex.innerHTML += cards[i];
}



const memoryCards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.add('flip');
}

memoryCards.forEach(card => card.addEventListener('click', flipCard));