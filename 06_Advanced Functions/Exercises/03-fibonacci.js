function getFibonator(){
    let numbers = [0];

    return function() {
        let fibonacciNumber = numbers.length > 1 
        ? numbers[numbers.length - 1] + numbers[numbers.length - 2]
        : 1;

        numbers.push(fibonacciNumber);
        return fibonacciNumber;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13