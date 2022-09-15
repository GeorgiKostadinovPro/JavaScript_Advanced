function solve(input){

    let numbers = input.map(x => Number(x));
    let sum = numbers[0] + numbers[numbers.length - 1];

    console.log(sum);
}

solve(['20', '30', '40']);