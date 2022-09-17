function solve(array){
    let result = [];
    array.sort((a, b) => a - b);

    while(array.length > 0){
        let firstEl = array.shift();
        let secondEl = array.pop();

        result.push(firstEl);
        result.push(secondEl);
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);