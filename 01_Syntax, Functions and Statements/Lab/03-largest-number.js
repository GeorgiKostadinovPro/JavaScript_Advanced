function solve(first, second, third){
    let numbers = [first, second, third];

    let largestNumber = numbers
    .sort((a, b) => b - a)[0];

    console.log(`The largest number is ${largestNumber}.`);
}

solve(5, -3, 16);