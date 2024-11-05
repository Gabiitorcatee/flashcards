// Seleciona todos os cartões
const cards = document.querySelectorAll('.cartao');

// Adiciona o evento de clique a cada cartão
cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

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
