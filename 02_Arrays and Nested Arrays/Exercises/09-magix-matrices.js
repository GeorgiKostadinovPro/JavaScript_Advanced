function solve(matrix){
    let isMagical = true;
    let checkingSum = matrix[0].reduce((a, x) => a + x, 0);

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, x) => a + x, 0);
        let colSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }

        if(rowSum !== checkingSum || colSum !== checkingSum){
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);