class VegetableStore {
    constructor(owner, location){
        this.owner = owner;
        this.location = location;

        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        vegetables.forEach(el => {
            let [productType, productQuantity, productPrice] = el.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);

            let currProduct = this.availableProducts.find(x => x.type === productType);

            if(currProduct !== undefined){
                currProduct.quantity += productQuantity;
                currProduct.price = productPrice > currProduct.price 
                ? productPrice 
                : currProduct.price;
            } else {
                currProduct = {
                    type: productType, 
                    quantity: productQuantity, 
                    price: productPrice
                };

                this.availableProducts.push(currProduct);
            }
        });
        
        let output = this.availableProducts
        .map(x => x.type)
        .join(', ');

        return `Successfully added ${output}`;
    }

    buyingVegetables(selectedProducts){
        let totalPrice = 0;

        selectedProducts.forEach(el => {
            let [productType, productQuantity] = el.split(' ');
            productQuantity = Number(productQuantity);

            let currProduct = this.availableProducts.find(x => x.type === productType);

            if(currProduct === undefined){
                throw new Error(`${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(productQuantity > currProduct.quantity){
                throw new Error(`The quantity ${productQuantity} for the vegetable ${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += productQuantity * currProduct.price;
            currProduct.quantity -= productQuantity;
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity){
        let currProduct = this.availableProducts.find(x => x.type === type);

        if(currProduct === undefined){
            throw new Error(`${type} is not available in the store.`);
        }

        if(quantity >= currProduct.quantity){
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }else{
            currProduct.quantity - quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision(){
        let result = [];

        result.push('Available vegetables:');
        this.availableProducts.sort((a, b) => a.price - b.price)
        .forEach(el => {
            result.push(`${el.type}-${el.quantity}-$${el.price}`);
        });

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

/*let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));*/

/*let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]))*/

/*let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));*/

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());