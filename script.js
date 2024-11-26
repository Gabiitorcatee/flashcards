const cards = document.querySelectorAll('.cartao');
const container = document.querySelector('#container');


let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matchedPairs = 0;

cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
        return;
    }

    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    const firstImg = firstCard.querySelector('.imagem-cartao').src;
    const secondImg = secondCard.querySelector('.imagem-cartao').src;

    if (firstImg === secondImg) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', () => flipCard(firstCard));
    secondCard.removeEventListener('click', () => flipCard(secondCard));

    matchedPairs++;

    if (matchedPairs === cards.length / 2) {
        setTimeout(shuffleCards, 1000);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
    matchedPairs = 0; 

    const shuffledCards = Array.from(cards); 
    shuffledCards.sort(() => Math.random() - 0.5); 

    const container = document.querySelector('#container'); 
    shuffledCards.forEach(card => {
        container.appendChild(card); 
        card.classList.remove('flipped');
    });
}
