function solve(array){
    let groups = [];
    let storeCatalogue = [];

    function distinct(value, index, self){
        return self.indexOf(value) === index;
    }

    array.forEach(el => {
        let [ productName, productPrice ] = el.split(' : ');
        groups.push(productName[0]);

        storeCatalogue.push( { productName, productPrice } );
    });

    storeCatalogue.sort((a, b) => 
           a.productName.toLowerCase().localeCompare(b.productName.toLowerCase()));

    groups.filter(distinct)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(el => {
        console.log(el);

        storeCatalogue.forEach(productObj => {
            if(productObj.productName[0] === el){
                console.log(`  ${productObj.productName}: ${productObj.productPrice}`);
            }
        })
    });
}

solve(['Appricot : 20.4',
       'Fridge : 1500', 
       'TV : 1499', 
       'Deodorant : 10', 
       'Boiler : 300', 
       'Apple : 1.25', 
       'Anti-Bug Spray : 15', 
       'T-Shirt : 10']);