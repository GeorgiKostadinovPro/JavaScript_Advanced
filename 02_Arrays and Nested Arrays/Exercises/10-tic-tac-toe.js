function solve(moves){
    let dashboard = [[false, false, false],
                     [false, false, false],
                     [false, false, false]];
                     
    let currPlayerSymbol = 'X';

    function printMatrix(){
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
    
    while(moves.length > 0){
        let playerMoves = moves
        .shift()
        .split(' ')
        .map(x => Number(x));

        let playerRow = playerMoves[0];
        let playerCol = playerMoves[1];

        if(dashboard[playerRow][playerCol] !== false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[playerRow][playerCol] = currPlayerSymbol;

        for (const row of dashboard) {
            const isRowWinning = row.every(x => x === currPlayerSymbol);

            if(isRowWinning){
                console.log(`Player ${currPlayerSymbol} wins!`);
                printMatrix();
                return;
            }
        }

        for (let i = 0; i < dashboard.length; i++) {
            let currColElements = [];

            for (let j = 0; j < dashboard[i].length; j++) {
                currColElements.push(dashboard[j][i]);
            }

            const isColWinning = currColElements.every(x => x === currPlayerSymbol);

            if(isColWinning){
                console.log(`Player ${currPlayerSymbol} wins!`);
                printMatrix();
                return;
            }
        }

        let mainDiagonalElements = [];
        let secondaryDiagonalElements = [];

        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard[i].length; j++) {
                if(i === j){
                    mainDiagonalElements.push(dashboard[i][j]);
                }

                if(i === dashboard[i].length - j - 1){
                    secondaryDiagonalElements.push(dashboard[i][j]);
                }
            }
        }    
        
        const isMainDiagonalWinning = mainDiagonalElements
        .every(x => x === currPlayerSymbol);

        const isSecondaryDiagonalWinning = secondaryDiagonalElements
        .every(x => x === currPlayerSymbol);

        if(isMainDiagonalWinning || isSecondaryDiagonalWinning){
            console.log(`Player ${currPlayerSymbol} wins!`);
            printMatrix();
            return;
        }
        
        if(!dashboard.some(row => row.includes(false))){
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }

        currPlayerSymbol = currPlayerSymbol === 'X' ? 'O' : 'X'; 
   }
}

solve(["0 1",
       "0 0",
       "0 2",
       "2 0",
       "1 0",
       "1 1",
       "1 2",
       "2 2",
       "2 1",
       "0 0"]);

solve(["0 0", 
       "0 0", 
       "1 1", 
       "0 1", 
       "1 2", 
       "0 2", 
       "2 2", 
       "1 2", 
       "2 2", 
       "2 1"]);

solve(["0 1",
       "0 0",
       "0 2",
       "2 0",
       "1 0",
       "1 2",
       "1 1",
       "2 1",
       "2 2",
       "0 0"]);