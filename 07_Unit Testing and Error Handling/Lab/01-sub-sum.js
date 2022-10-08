function solve(numbers, startIdx, endIdx){
    if(!Array.isArray(numbers) 
    || numbers.some(x => isNaN(Number(x)))){
        return NaN;
    }

    if(startIdx < 0){
        startIdx = 0;
    }

    if(endIdx >= numbers.length){
        endIdx = numbers.length - 1;
    }

    let sum = 0;

    for (let i = startIdx; i <= endIdx; i++) {
        sum += numbers[i];
    }

    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
solve([10, 'twenty', 30, 40], 0, 2);
solve([], 1, 2);
solve('text', 0, 2);
