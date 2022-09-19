function solve(n, m){
    const matrix = Array.from({ length: n }, () => []);
    let row = 0;
    let col = 0;
    let rowEnd = n - 1;
    let colEnd = m - 1;
    let counter = 1;
    while (col <= colEnd && row <= rowEnd) {
        for (let i = col; i <= colEnd; i++) {
            matrix[row][i] = counter;
            counter++;
        }

        row++;

        for (let i = row; i <= rowEnd; i++) {
            matrix[i][colEnd] = counter;
            counter++;
        }

        colEnd--;

        for (let i = colEnd; i >= col; i--) {
            matrix[rowEnd][i] = counter;
            counter++;
        }

        rowEnd--;

        for (let i = rowEnd; i >= row; i--) {
            matrix[i][col] = counter;
            counter++;
        }
        
        col++;
    }
    
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

solve(5, 5);