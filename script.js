
const cards = document.querySelectorAll('.cartao');

cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matchedPairs = 0;

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.toggle('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
        return;
    }

    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('.imagem-cartao').src === secondCard.querySelector('.imagem-cartao').src;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedPairs += 1;

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

    const container = document.querySelector('.seu-container'); 
    shuffledCards.forEach(card => container.appendChild(card));

    cards.forEach(card => card.classList.remove('flipped'));

    cards.forEach(card => card.addEventListener('click', () => flipCard(card)));
}

