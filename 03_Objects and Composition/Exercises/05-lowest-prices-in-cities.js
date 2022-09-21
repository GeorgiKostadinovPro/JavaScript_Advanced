function solve(array){
    let productsWithPrices = [];

    array.forEach(el => {
        let [ town, product, price] = el.split(' | ');
        price = Number(price);

        let currObj = { town, product, price };

        if(!productsWithPrices.some(x => x.product === product)){
            productsWithPrices.push(currObj);
        }else{
            let productToCheck = productsWithPrices
            .find(x => x.product === product);

            if(currObj.price < productToCheck.price){
                let productToCheckIdx = productsWithPrices.indexOf(productToCheck);
                productsWithPrices.splice(productToCheckIdx, 1, currObj);
            }
        }
    });

    productsWithPrices.forEach(el => {
        console.log(`${el.product} -> ${el.price} (${el.town})`);
    })
}

solve(['Sample Town | Sample Product | 1000',
       'Sample Town | Orange | 2',
       'Sample Town | Peach | 1',
       'Sofia | Orange | 3',
       'Sofia | Peach | 2',
       'New York | Sample Product | 1000.1',
       'New York | Burger | 10']);