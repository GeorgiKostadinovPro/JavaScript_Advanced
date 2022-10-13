function solve(input){
    let juicesObj = {};
    let bottles = new Map();

    input.forEach(el => {
        let [juiceName, juiceQuantity] = el.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if(!juicesObj.hasOwnProperty(juiceName)){
            juicesObj[juiceName] = 0;
        }

        juicesObj[juiceName] += juiceQuantity;
        
        if(juicesObj[juiceName] > 999){
            let producedBottles = Math.floor(juicesObj[juiceName] / 1000);
            bottles.set(juiceName, producedBottles);
        }
    });

    bottles.forEach((value, key) => console.log(`${key} => ${value}`));
}

solve(['Orange => 2000',
       'Peach => 1432',
       'Banana => 450',
       'Peach => 600',
       'Strawberry => 549']);

solve(['Kiwi => 234',
       'Pear => 2345',
       'Watermelon => 3456',
       'Kiwi => 4567',
       'Pear => 5678',
       'Watermelon => 6789']);