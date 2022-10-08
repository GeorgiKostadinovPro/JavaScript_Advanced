function solve(cardFace, cardSuit){
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if(!validCardFaces.includes(cardFace) || !validCardSuits[cardSuit]){
        throw new Error('Invalid card face or suit!');
    }

    let cardObj = {
        cardFace,
        cardSuit
    };

    cardObj.toString = () => `${cardFace}${validCardSuits[cardSuit]}`;
    
    return cardObj;
}

solve('A', 'S');
solve('10', 'H');
solve('1', 'C');
