function solve(num, op1, op2, op3, op4, op5){
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (const operation of operations) {
        if(operation === 'chop'){
            number /= 2;
            console.log(number);
        }else if(operation === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }else if(operation === 'spice'){
            number += 1;
            console.log(number);
        }else if(operation === 'bake'){
            number *= 3;
            console.log(number);
        }else if(operation === 'fillet'){
            number -= number * 0.2;
            console.log(number);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');