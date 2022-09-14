function solve(num){
    let isNumValid = true;

    let digits = num.toString();
    let firstDigit = digits[0];
    let digitsSum = Number(firstDigit);

    for (let i = 1; i < digits.length; i++) {
        let currDigit = digits[i];
        digitsSum += Number(currDigit);

        if(currDigit !== firstDigit){
            isNumValid = false;
        } 
    }     

    console.log(isNumValid);
    console.log(digitsSum);
}

solve(2222222);