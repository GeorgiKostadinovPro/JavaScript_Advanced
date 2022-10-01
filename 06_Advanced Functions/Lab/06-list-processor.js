function solve(array){
    let items = [];

    let obj = {
        add: function(str) {
            items.push(str);
        },

        remove: function(str) {
            items = items.filter(x => x !== str);
        },

        print: function() {
            console.log(items.join(','));
        }
    };

    array.forEach(el => {
        let [method, argument] = el.split(' ');
        
        obj[method].call(this, argument);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);