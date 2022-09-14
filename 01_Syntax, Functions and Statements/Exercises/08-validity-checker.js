function solve(x1, y1, x2, y2){
    let firstDistance = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    let secondDistance = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let thirdDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    let isValid = (distance) => {
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    };

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(firstDistance)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(secondDistance)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(thirdDistance)}`);
}

solve(3, 0, 0, 4);