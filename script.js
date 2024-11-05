let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function flipCard(card) {
    if (lockBoard) return; // Ignora cliques enquanto o tabuleiro está bloqueado
    if (card === firstCard) return; // Ignora se o mesmo cartão for clicado

    card.classList.toggle('flipped'); // Vira o cartão

    if (!hasFlippedCard) {
        // Primeira vez que um cartão é clicado
        hasFlippedCard = true;
        firstCard = card; // Primeiro cartão clicado
        return;
    }

    // Segunda vez que um cartão é clicado
    secondCard = card; // Segundo cartão clicado
    checkForMatch(); // Verifica se há um par
}

function checkForMatch() {
    const firstImage = firstCard.querySelector('.imagem-cartao').src;
    const secondImage = secondCard.querySelector('.imagem-cartao').src;
    const isMatch = firstImage === secondImage; // Verifica se as imagens são iguais

    if (isMatch) {
        disableCards(); // Desativa os cartões se forem iguais
    } else {
        unflipCards(let firstCard, secondCard;
            let hasFlippedCard = false;
            let lockBoard = false;
            
            function flipCard(card) {
                if (lockBoard) return; // Ignora cliques enquanto o tabuleiro está bloqueado
                if (card === firstCard) return; // Ignora se o mesmo cartão for clicado
            
                card.classList.toggle('flipped'); // Vira o cartão
            
                if (!hasFlippedCard) {
                    // Primeira vez que um cartão é clicado
                    hasFlippedCard = true;
                    firstCard = card; // Primeiro cartão clicado
                    return;
                }
            
                // Segunda vez que um cartão é clicado
                secondCard = card; // Segundo cartão clicado
                checkForMatch(); // Verifica se há um par
            }
            
            function checkForMatch() {
                const firstImage = firstCard.querySelector('.imagem-cartao').src;
                const secondImage = secondCard.querySelector('.imagem-cartao').src;
                const isMatch = firstImage === secondImage; // Verifica se as imagens são iguais
            
                if (isMatch) {
                    disableCards(); // Desativa os cartões se forem iguais
                } else {
                    unflipCards(); // Desvira os cartões se não forem iguais
                }
            }
            
            function disableCards() {
                // Remove o evento de clique dos cartões correspondentes
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);
            
                resetBoard(); // Reseta as variáveis para o próximo par
            }
            
            function unflipCards() {
                lockBoard = true; // Bloqueia o tabuleiro temporariamente
            
                setTimeout(() => {
                    firstCard.classList.remove('flipped'); // Desvira o primeiro cartão
                    secondCard.classList.remove('flipped'); // Desvira o segundo cartão
                    resetBoard(); // Reseta as variáveis para o próximo par
                }, 1000); // Tempo para mostrar os cartões antes de desvirá-los
            }
            
            function resetBoard() {
                [hasFlippedCard, lockBoard] = [false, false]; // Reseta as variáveis
                [firstCard, secondCard] = [null, null]; // Limpa os cartões virados
            }
            ); // Desvira os cartões se não forem iguais
    }
}

function disableCards() {
    // Remove o evento de clique dos cartões correspondentes
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard(); // Reseta as variáveis para o próximo par
}

function unflipCards() {
    lockBoard = true; // Bloqueia o tabuleiro temporariamente

    setTimeout(() => {
        firstCard.classList.remove('flipped'); // Desvira o primeiro cartão
        secondCard.classList.remove('flipped'); // Desvira o segundo cartão
        resetBoard(); // Reseta as variáveis para o próximo par
    }, 1000); // Tempo para mostrar os cartões antes de desvirá-los
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; // Reseta as variáveis
    [firstCard, secondCard] = [null, null]; // Limpa os cartões virados
}
