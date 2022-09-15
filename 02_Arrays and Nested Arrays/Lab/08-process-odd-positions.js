function solve(input){
    let result = [];

    for (let i = 1; i < input.length; i+=2) {
        let element = input[i] * 2;
        result.push(element);
    }

    return result.reverse().join(' ');
}

solve([3, 0, 10, 4, 7, 3]);