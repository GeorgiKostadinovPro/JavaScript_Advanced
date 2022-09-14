function solve(fruit, weight, pricePerKilogram){
    
    let weightInKilograms = weight / 1000;
    let neededMoney = weightInKilograms * pricePerKilogram;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);