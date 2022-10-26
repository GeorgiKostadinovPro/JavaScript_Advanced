const { carService } = require('./carService.js');
const { assert } = require('chai');


describe("Tests for carService object", function() { 

    describe("Tests for isItExpensive function", function() { 
 
        it("should return proper message when the issue is Engine", function() { 
           let result = carService.isItExpensive("Engine");
           assert.equal('The issue with the car is more severe and it will cost more money', result);
        }); 

        it("should return proper message when the issue is Transmission", function() { 
            let result = carService.isItExpensive("Transmission");
            assert.equal('The issue with the car is more severe and it will cost more money', result);
         });

         it("should return proper message when the issue is not Engine or Transmission", function() { 
            let result = carService.isItExpensive("Tires");
            assert.equal('The overall price will be a bit cheaper', result);
         });
     }); 


     describe("Tests for discount function", function() { 
 
        // invalid parts input
        it("should throw an error when number of parts is a string", function() { 
           assert.throws(() => carService.discount("3", 10));
        }); 

        it("should throw an error when number of parts is null", function() { 
            assert.throws(() => carService.discount(null, 10));
         }); 

         it("should throw an error when number of parts is undifined", function() { 
            assert.throws(() => carService.discount(undefined, 10));
         }); 

         it("should return 'cannot apply a sicount' message when number of parts are less then 2", function(){
            let result = carService.discount(1, 10);
            assert.equal('You cannot apply a discount', result);
         });

         it("should return 'cannot apply a sicount' message when number of parts are equal to 2", function(){
            let result = carService.discount(2, 10);
            assert.equal('You cannot apply a discount', result);
         });

         //invalid price input
         it("should throw an error when totalPrice is a string", function() { 
            assert.throws(() => carService.discount(10, "3"));
         }); 
 
         it("should throw an error when number of parts is null", function() { 
             assert.throws(() => carService.discount(10, null));
          }); 
 
          it("should throw an error when number of parts is undifined", function() { 
             assert.throws(() => carService.discount(10, undefined));
          }); 

          // discount should work properly
          it("should work properly when the number of part is between 3 and 7", function(){
            let result = carService.discount(5, 10);
            assert.equal('Discount applied! You saved 1.5$', result);
         });

         it("should work properly when the number of part is equal to 7", function(){
            let result = carService.discount(7, 10);
            assert.equal('Discount applied! You saved 1.5$', result);
         });

         it("should work properly when the number of part is above 7", function(){
            let result = carService.discount(8, 10);
            assert.equal('Discount applied! You saved 3$', result);
         });
     }); 


     describe("Tests for partsToBuy function", function() { 
 
        it("should throw an error when first parameter is not of type array", function() { 
          assert.throws(() => carService.partsToBuy({}, []));
        }); 

        it("should throw an error when second parameter is not of type array", function() { 
          assert.throws(() => carService.partsToBuy([], {}));
         });

         it("should return 0 when partsCatalog is empty", function() { 
            let result = carService.partsToBuy([], []);
            assert.equal(0, result);
           });

           it("should work properly", function() { 
            let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]);
            assert.equal(145, result);
           });
     }); 
}); 