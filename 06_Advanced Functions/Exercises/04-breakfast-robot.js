function solution(){
    const ingredientsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const mealsObj = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const processorObj = {
        restock: function(microEl, quantity){
            ingredientsObj[microEl] += quantity;
            return 'Success';
        },

        prepare: function(recipe, quantity){
            let neededIngredients = mealsObj[recipe];

            for (const key in neededIngredients) {
                if(ingredientsObj[key] < neededIngredients[key] * quantity){
                    return `Error: not enough ${key} in stock`;
                }

                ingredientsObj[key] -= neededIngredients[key] * quantity;
            }

            return 'Success';
        },

        report: function(){
            let result = [];

            Object.entries(ingredientsObj).forEach(el => {
                result.push(`${el[0]}=${el[1]}`);
            });

            return result.join(' ');
        }
    };

    function manager(instructions){
        let [command, microElOrRecipe, quantity] = instructions.split(' ');

        return processorObj[command].call(this, microElOrRecipe, Number(quantity));
    }

    return manager;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55