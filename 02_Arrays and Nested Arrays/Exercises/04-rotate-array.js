function solve(array, rotations){
    while(rotations > 0){
        let lastElement = array.pop();
        array.unshift(lastElement);

        rotations--;
    }

    console.log(array.join(' '));
}

solve(['1', '2', '3', '4'], 2);