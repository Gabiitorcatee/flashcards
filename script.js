const cards = document.querySelectorAll('.cartao');
const container = document.querySelector('#container');

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matchedPairs = 0;

// Função principal para iniciar o jogo
function initGame() {
    resetBoard(); // Reseta estado
    matchedPairs = 0;

    // Embaralhar e reorganizar os cartões no início
    shuffleCards();

    // Adicionar eventos de clique para cada cartão
    cards.forEach(card => {
        card.classList.remove('flipped'); // Garante que nenhum cartão fique virado
        card.addEventListener('click', () => flipCard(card));
    });
}

// Função para virar os cartões
function flipCard(card) {
    if (lockBoard || card === firstCard) return;

    card.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
        return;
    }

    secondCard = card;
    checkForMatch();
}

// Verifica se os cartões virados são um par
function checkForMatch() {
    const firstImg = firstCard.querySelector('.imagem-cartao').src;
    const secondImg = secondCard.querySelector('.imagem-cartao').src;

    if (firstImg === secondImg) {
        disableCards();
    } else {
        unflipCards();
    }
}

// Desativa cartões que formaram um par
function disableCards() {
    firstCard.removeEventListener('click', () => flipCard(firstCard));
    secondCard.removeEventListener('click', () => flipCard(secondCard));

    matchedPairs++;

    if (matchedPairs === cards.length / 2) {
        setTimeout(() => {
            alert('Parabéns! Você completou o jogo!');
            initGame(); // Reinicia o jogo
        }, 1000);
    }

    resetBoard();
}

// Desvira os cartões se não forem um par
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

// Reseta as variáveis de controle
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Embaralha os cartões
function shuffleCards() {
    const shuffledCards = Array.from(cards); 
    shuffledCards.sort(() => Math.random() - 0.5);

    shuffledCards.forEach(card => {
        container.appendChild(card); // Reorganiza os cartões no DOM
    });
}

// Inicia o jogo ao carregar a página
initGame();
