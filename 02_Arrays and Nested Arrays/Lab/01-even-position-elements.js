function solve(input){
    let elements = input.filter((x, i) => {
        if(i % 2 == 0){
            return x;
        }
    });

    console.log(elements.join(' '));
}

solve(['20', '30', '40', '50', '60']);