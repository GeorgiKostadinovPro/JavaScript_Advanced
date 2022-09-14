function solve(num1, num2){
    while(num1 !== 0 && num2 !== 0){
        if(num1 > num2){
            num1 %= num2;
        }else{
            num2 %= num1;
        }
    }

    console.log(num1 | num2);
}

solve(15, 5);