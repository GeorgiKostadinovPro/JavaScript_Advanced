function solve(input){
    let productsObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let productName = input[i];
        let productCalories = Number(input[i + 1]);

        productsObj[productName] = productCalories;
    }

    console.log(productsObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);