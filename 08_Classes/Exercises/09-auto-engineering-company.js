function solve(input){
    let company = new Map();

    input.forEach(el => {
        let [brand, model, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);

        if(!company.has(brand)){
            company.set(brand, {});
        }

        let currProducedCarsObj = company.get(brand);

        if(!currProducedCarsObj.hasOwnProperty(model)){
            currProducedCarsObj[model] = 0;
        }

        currProducedCarsObj[model] += producedCars;
    });

    company.forEach((value, key) => {
        console.log(key);

        Object.entries(value).forEach(el => {
            console.log(`###${el[0]} -> ${el[1]}`);
        });
    })
}

solve(['Audi | Q7 | 1000',
       'Audi | Q6 | 100',
       'BMW | X5 | 1000',
       'BMW | X6 | 100',
       'Citroen | C4 | 123',
       'Volga | GAZ-24 | 1000000',
       'Lada | Niva | 1000000',
       'Lada | Jigula | 1000000',
       'Citroen | C4 | 22',
       'Citroen | C5 | 10']);