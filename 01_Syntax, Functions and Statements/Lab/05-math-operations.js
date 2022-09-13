function solve(num1, num2, operator){
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let result = 0;

    if(operator === '+'){
        result = firstNumber + secondNumber;
    }else if(operator === '-'){
        result = firstNumber - secondNumber;
    }else if(operator === '*'){
        result = firstNumber * secondNumber;
    }else if(operator === '/'){
        result = firstNumber / secondNumber;
    }else if(operator === '%'){
        result = firstNumber % secondNumber;
    }else if(operator === '**'){
        result = firstNumber ** secondNumber;
    }

    console.log(result);
}

solve(5, 6, '+');