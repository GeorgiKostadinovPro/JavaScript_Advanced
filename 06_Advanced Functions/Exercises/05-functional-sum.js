function add(number){
    let sum = 0;

    function innnerAdd(num){
        sum += num;

        return innnerAdd;
    }

    innnerAdd.toString = () => sum;

    return innnerAdd(number);
}

console.log(add(1));
console.log(add(1)(6)(-3));