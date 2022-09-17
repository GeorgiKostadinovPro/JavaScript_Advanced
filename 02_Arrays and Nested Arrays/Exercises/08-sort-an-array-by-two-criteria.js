function solve(array){
    array.sort((a, b) => {
        let result = a.length - b.length;
        if(result != 0){
            return result;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    })

    console.log(array.join('\n'))
}

solve(['alpha','beta', 'gamma']);