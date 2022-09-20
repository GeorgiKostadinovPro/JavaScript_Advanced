function solve(input){
    let [ width, height, x, y] = [...input];
    let matrix = [];

    for(let i = 0; i < width; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

solve([4, 4, 0, 0]);