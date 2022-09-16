function solve(array, n){
    let result = array.filter((x, i) => {
        if(i % n === 0){
            return x;
        }
    })
    
    return result;
}

solve(['5', '20', '31', '4', '20'], 2);