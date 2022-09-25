function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textareaElement = document.querySelector('#inputs textarea');
      let bestRestaurantPElement = document.querySelector('#bestRestaurant p');
      let bestWorkersPElement = document.querySelector('#workers p');
      let restaurantsObj = {};
      let bestRestaurant = '';
      let bestRestaurantAvgSalary = 0;

      let restaurants = JSON.parse(textareaElement.value);
      restaurants.forEach(el => {
         let [restaurantName, workers] = el.split(' - ');
         workers = workers.split(', '); 
         
         if(!restaurantsObj.hasOwnProperty(restaurantName)){
            restaurantsObj[restaurantName] = [];
         }
         
         workers.forEach(el => {
            let [name, salary] = el.split(' ');
            let workerObj = {
               name,
               salary: Number(salary)
            };

            restaurantsObj[restaurantName].push(workerObj);
         });
      });

      Object.entries(restaurantsObj).forEach(el => {
         let currRestaurantAvgSalary = el[1].reduce((acc, x) => acc + x.salary, 0) 
         / el[1].length;

         if(currRestaurantAvgSalary > bestRestaurantAvgSalary){
            bestRestaurantAvgSalary = currRestaurantAvgSalary;
            bestRestaurant = el[0];
         }
      }); 
      
      let bestWorkersOutput = restaurantsObj[bestRestaurant]
      .sort((a, b) => b.salary - a.salary);

      bestRestaurantPElement.textContent = `Name: ${bestRestaurant} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestWorkersOutput[0].salary.toFixed(2)}`;
      bestWorkersPElement.textContent = bestWorkersOutput.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');
   }
}