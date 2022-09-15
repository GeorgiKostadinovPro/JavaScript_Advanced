function solve(input){
    let startIdx = Math.floor(input.length / 2);
    let result = input.sort((a, b) => a - b)
    .slice(startIdx);

    return result;
}

solve([4, 7, 2, 5]);