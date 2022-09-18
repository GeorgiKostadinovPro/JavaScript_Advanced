function solve(input){
    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        let rowData = input[i]
        .split(' ')
        .map(x => Number(x));

        matrix.push(rowData);
    }
    
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

    if(mainDiagonalSum === secondaryDiagonalSum){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(i !== j && i !== matrix[i].length - j - 1){
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

solve(['5 3 12 3 1',
       '11 4 23 2 5',
       '101 12 3 21 10',
       '1 4 5 2 2',
       '5 22 33 11 1']);

solve(['1 1 1', 
       '1 1 1', 
       '1 1 0']);