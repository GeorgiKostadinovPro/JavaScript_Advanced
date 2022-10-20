class CarDealership {
    constructor(name){
      this.name = name;
      this.availableCars = [];
      this.soldCars = [];
      this.totalIncome = 0;
   }

   addCar(model, horsepower, price, mileage){
      if(!model || model.length === 0 || horsepower < 0 || price < 0 || mileage < 0){
           throw new Error('Invalid input!');
      }

      let carObj = {model, horsepower, price, mileage};
      this.availableCars.push(carObj);

      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
   }

   sellCar(model, desiredMileage){
      let desiredCar = this.availableCars.find(c => c.model === model);

      if(!desiredCar){
          throw new Error(`${model} was not found!`);
      }

      let carSellingPrice = 0;

      if(desiredCar.mileage <= desiredMileage){
         carSellingPrice = desiredCar.price;
      }
      else{
        if(desiredCar.mileage - desiredMileage <= 40000){
           carSellingPrice = desiredCar.price - desiredCar.price * 0.05;
        }
        else{
           carSellingPrice = desiredCar.price - desiredCar.price * 0.10;
        }
      }

      let desiredCarIndex = this.availableCars.indexOf(desiredCar);
      this.availableCars.splice(desiredCarIndex, 1);

      let soldCarObj = {model: desiredCar.model, horsepower: desiredCar.horsepower, soldPrice: carSellingPrice};
      this.soldCars.push(soldCarObj);
      this.totalIncome += carSellingPrice;

      return `${model} was sold for ${soldCarObj.soldPrice.toFixed(2)}$`;
   }

   currentCar(){
      if(this.availableCars.length === 0){
        return 'There are no available cars';
      } 
      
      let currentAvailableCars = [];

      currentAvailableCars.push('-Available cars:');
      this.availableCars
      .forEach(c => currentAvailableCars.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));

      return currentAvailableCars.join('\n');
   }

   salesReport(criteria){
       if(criteria !== 'horsepower' && criteria !== 'model'){
         throw new Error('Invalid criteria!');
       } 
       
       let result = [];

       result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
       result.push(`-${this.soldCars.length} cars sold:`);

       if(criteria === 'horsepower'){
         this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
       }

       else if(criteria === 'model'){
         this.soldCars.sort((a, b) => a.model.toLowerCase().localeCompare(b.model.toLowerCase()));
       }

       this.soldCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));

       return result.join('\n');
   }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport('horsepower'));




