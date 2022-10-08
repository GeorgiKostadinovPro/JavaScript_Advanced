function printDeckOfCards(cards) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    let deckOfCards = [];

    function createCard (cardFace, cardSuit){
        if(!validCardFaces.includes(cardFace) || !validCardSuits[cardSuit]){
            throw new Error(`Invalid card face or suit!`);
        }
    
        let cardObj = {
            cardFace,
            cardSuit
        };
    
        cardObj.toString = () => `${cardFace}${validCardSuits[cardSuit]}`;
        
        return cardObj;
    }

    cards.forEach(card => {
        let cardFace = card.substring(0, card.length - 1);
        let cardSuit = card.substring(card.length - 1);

        try {
            let cardObj = createCard(cardFace, cardSuit);
            deckOfCards.push(cardObj.toString());
        } catch (error) {
            console.log(`Invalid card: ${cardFace}${cardSuit}`);
            return;
        }
    });
    
    console.log(deckOfCards.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);