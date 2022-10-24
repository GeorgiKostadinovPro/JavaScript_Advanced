const { flowerShop } = require('./flowerShop.js');
const { assert } = require('chai');

describe("Tests for the flowerShop object", function() { 
    describe("Tests for the function calcPriceOfFlowers", function() { 
        it("should throw an error when the flower param is not a string", function() { 
            assert.throws(() => flowerShop.calcPriceOfFlowers({}, 5, 2));
        });

        it("should throw an error when the price param is not a number", function() { 
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', '2', 2));
        });

        it("should throw an error when the price param is not an integer", function() { 
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 5.5, 2));
        });

        it("should throw an error when the quantity param is not a number", function() { 
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 5, '2'));
        });

        it("should throw an error when the quantity param is not an integer", function() { 
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 5, 2.5));
        });

        it("should work properly", function() { 
            let result = flowerShop.calcPriceOfFlowers('Rose', 5, 2);
            assert.equal(result, 'You need $10.00 to buy Rose!');
        });
     });

     describe("Tests for the function checkFlowersAvailable", function() { 
        it("should work properly with available flower", function() { 
            let result = flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Lily are available!');
        });

        it("should work properly with not available flower", function() { 
            let result = flowerShop.checkFlowersAvailable('Violet', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Violet are sold! You need to purchase more!');
        });
     });

     describe("Tests for the function sellFlowers", function() { 
        it("should throw an error when the gardenArr param is not an array", function() { 
            assert.throws(() => flowerShop.sellFlowers('Rose', 1));
        });

        it("should throw an error when the space param is not a number", function() { 
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1'));
        });

        it("should throw an error when the space param is not an integer", function() { 
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5));
        });

        it("should throw an error when the space param is less than 0", function() { 
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1));
        });

        it("should throw an error when the space param is equal to the gardenArr param length", function() { 
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3));
        });

        it("should throw an error when the space param is bigger to the gardenArr param length", function() { 
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4));
        });

        it("should work properly", function(){
            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1);
            assert.equal('Rose / Orchid', result);
        });
     });
}); 