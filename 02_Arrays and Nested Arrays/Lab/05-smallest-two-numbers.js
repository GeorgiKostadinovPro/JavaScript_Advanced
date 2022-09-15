function solve(input){
    let result = input.sort((a, b) => a - b)
    .slice(0, 2);

    console.log(result.join(' '));
}

solve([30, 15, 50, 5]);