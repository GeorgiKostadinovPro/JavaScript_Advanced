function solve(matrix){
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i === j){
                mainDiagonalSum += matrix[i][j];
            }
            
            if(i === matrix[i].length - j - 1){
                secondaryDiagonalSum += matrix[i][j];
            }
        }
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

solve([[20, 40], 
      [10, 60]]);