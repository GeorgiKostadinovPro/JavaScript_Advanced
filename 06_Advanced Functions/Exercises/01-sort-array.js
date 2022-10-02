function solve(array, criteria){
    let obj = {
        asc: function(){
            return array.sort((a, b) => a - b);
        },

        desc: function(){
            return array.sort((a, b) => b - a);
        }
    };

    return obj[criteria].call(this);
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');