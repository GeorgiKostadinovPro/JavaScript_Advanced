function solve(array){
    let operands = [];
    let operatorsCount = array.filter(x => typeof x === 'string').length;

    if(operatorsCount === 0){
        console.log('Error: too many operands!');
        return;
    }

    while(array.length > 0){
        let element = array.shift();

        if(typeof element === 'number'){
            operands.push(element);
            continue;
        }

        if(operands.length < 2){
            console.log('Error: not enough operands!');
            return;
        }

        let diff = operands.length - operatorsCount;

        if(diff > 1){
            console.log('Error: too many operands!');
            return;
        }

        let secondOperand = operands.pop();
        let firstOperand = operands.pop();
        let result = 0;

        if(element === '+'){
            result = firstOperand + secondOperand;
        }else if(element === '-'){
            result = firstOperand - secondOperand;
        }else if(element === '*'){
            result = firstOperand * secondOperand;
        }else{
            result = firstOperand / secondOperand;
        }

        operands.push(result);
    }

    console.log(operands[0]);
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15, '/']);