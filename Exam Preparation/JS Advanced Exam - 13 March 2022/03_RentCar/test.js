const { rentCar } = require('./rentCar.js');
const { assert } = require('chai');

describe("Tests for rentCar class", function() { 

    describe("Tests for searchCar function", function() { 
        // tests for shop input  parameter 
        it("should throw an error when shop parameter is a string", function() { 
           assert.throws(() => rentCar.searchCar('array', 'BMW'));
        }); 

        it("should throw an error when shop parameter is a null", function() { 
            assert.throws(() => rentCar.searchCar(null, 'BMW'));
         }); 

         it("should throw an error when shop parameter is an undefined", function() { 
            assert.throws(() => rentCar.searchCar(undefined, 'BMW'));
         }); 

         it("should throw an error when shop parameter is an object", function() { 
            assert.throws(() => rentCar.searchCar({}, 'BMW'));
         }); 

         //tests for model input parameter
         it("should throw an error when model parameter is an array", function() { 
            assert.throws(() => rentCar.searchCar([], []));
         }); 
 
         it("should throw an error when model parameter is a null", function() { 
             assert.throws(() => rentCar.searchCar([], null));
          }); 
 
          it("should throw an error when model parameter is an undefined", function() { 
             assert.throws(() => rentCar.searchCar([], undefined));
          }); 
 
          it("should throw an error when model parameter is an object", function() { 
             assert.throws(() => rentCar.searchCar([], {}));
          }); 

          // tests for output
          it("should throw an error when there are no models", function() { 
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes'));
         }); 

         it("should work properly", function() { 
            let result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')
            assert.equal(result, 'There is 1 car of model BMW in the catalog!');
         }); 
     }); 

     describe("Tests for calculatePriceOfCar function", function() { 
         //tests for model input parameter
         it("should throw an error when model parameter is an array", function() { 
            assert.throws(() => rentCar.calculatePriceOfCar([], 2));
         }); 
 
         it("should throw an error when model parameter is a null", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar(null, 2));
          }); 
 
          it("should throw an error when model parameter is an undefined", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar(undefined, 2));
          }); 
 
          it("should throw an error when model parameter is an object", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar({}, 2));
          }); 


          //tests for days input parameter
         it("should throw an error when days parameter is an array", function() { 
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', []));
         }); 
 
         it("should throw an error when days parameter is a null", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar('BMW', null));
          }); 
 
          it("should throw an error when days parameter is an undefined", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar('BMW', undefined));
          }); 

          it("should throw an error when days parameter is a string", function() { 
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', '2'));
         }); 

         it("should throw an error when days parameter is not an integer", function() { 
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', 2.5));
         }); 
 
          it("should throw an error when days parameter is an object", function() { 
             assert.throws(() => rentCar.calculatePriceOfCar('BMW', {}));
          }); 

          //tests for output
          it("should throw an error when model is not in the catalogue", function() { 
            assert.throws(() => rentCar.calculatePriceOfCar('Bugatti', 2));
         }); 

         it("should work properly", function() { 
           let result = rentCar.calculatePriceOfCar('BMW', 2);
           assert.equal(result, 'You choose BMW and it will cost $90!');
         }); 
     }); 

     describe("Tests for checkBudget function", function() { 
        // tests for costPerDay input parameter
        it("should throw an error when costPerDay parameter is an array", function() { 
            assert.throws(() => rentCar.checkBudget([], 2, 90));
         }); 
 
         it("should throw an error when costPerDay parameter is a null", function() { 
             assert.throws(() => rentCar.checkBudget(null, 2, 90));
          }); 
 
          it("should throw an error when costPerDay parameter is an undefined", function() { 
             assert.throws(() => rentCar.checkBudget(undefined, 2, 90));
          }); 

          it("should throw an error when costPerDay parameter is a string", function() { 
            assert.throws(() => rentCar.checkBudget('2', 2, 90));
         }); 

         it("should throw an error when costPerDay parameter is not an integer", function() { 
            assert.throws(() => rentCar.checkBudget(2.5, 2, 90));
         }); 
 
          it("should throw an error when costPerDay parameter is an object", function() { 
             assert.throws(() => rentCar.checkBudget({}, 2, 90));
          }); 


           // tests for days input parameter
        it("should throw an error when days parameter is an array", function() { 
            assert.throws(() => rentCar.checkBudget(2, [], 90));
         }); 
 
         it("should throw an error when days parameter is a null", function() { 
             assert.throws(() => rentCar.checkBudget(2, null, 90));
          }); 
 
          it("should throw an error when days parameter is an undefined", function() { 
             assert.throws(() => rentCar.checkBudget(2, undefined, 90));
          }); 

          it("should throw an error when days parameter is a string", function() { 
            assert.throws(() => rentCar.checkBudget(2, '2', 90));
         }); 

         it("should throw an error when days parameter is not an integer", function() { 
            assert.throws(() => rentCar.checkBudget(2, 2.5, 90));
         }); 
 
          it("should throw an error when days parameter is an object", function() { 
             assert.throws(() => rentCar.checkBudget(2, {}, 90));
          });
          
           // tests for budget input parameter
        it("should throw an error when budget parameter is an array", function() { 
            assert.throws(() => rentCar.checkBudget(2, 2, []));
         }); 
 
         it("should throw an error when budget parameter is a null", function() { 
             assert.throws(() => rentCar.checkBudget(2, 2, null));
          }); 
 
          it("should throw an error when budget parameter is an undefined", function() { 
             assert.throws(() => rentCar.checkBudget(2, 2, undefined));
          }); 

          it("should throw an error when budget parameter is a string", function() { 
            assert.throws(() => rentCar.checkBudget(2, 2, '90'));
         }); 

         it("should throw an error when budget parameter is not an integer", function() { 
            assert.throws(() => rentCar.checkBudget(2, 2, 90.5));
         }); 
 
          it("should throw an error when budget parameter is an object", function() { 
             assert.throws(() => rentCar.checkBudget(2, 2, {}));
          }); 

          //test for output
          it("should work properly when cost is less than the budget", function() { 
            let result = rentCar.checkBudget(10, 3, 90);
            assert.equal(result, 'You rent a car!');
         }); 

         it("should work properly when cost is equal to the budget", function() { 
            let result = rentCar.checkBudget(30, 3, 90);
            assert.equal(result, 'You rent a car!');
         });

         it("should work properly when cost is bigger than the budget", function() { 
            let result = rentCar.checkBudget(31, 3, 90);
            assert.equal(result, 'You need a bigger budget!');
         }); 
     }); 
}); 