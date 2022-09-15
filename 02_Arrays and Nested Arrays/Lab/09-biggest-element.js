function solve(matrix){
    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let currElement = matrix[i][j];

            if(currElement > biggestElement){
                biggestElement = currElement;
            }
        }
    }

    return biggestElement;
}

solve([[20, 50, 10],
       [8, 33, 145]]);