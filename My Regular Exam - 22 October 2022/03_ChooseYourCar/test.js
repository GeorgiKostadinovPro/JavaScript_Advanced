const { chooseYourCar } = require('./chooseYourCar.js');
const { assert } = require('chai');

describe("Tests for the chooseYourCar object", function() { 
    describe("Tests for the choosingType function", function() { 
        it("Should throw an error when the year param is less than 1900", function() { 
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'black', 1899)
            , 'Invalid Year!');
        }); 

        it("Should throw an error when the year param is greater than 2022", function() { 
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'black', 2023)
            , 'Invalid Year!');
        }); 

        it("Should throw an error when the type param is not Sedan", function() { 
            assert.throws(() => chooseYourCar.choosingType('Combi', 'black', 2022)
            , 'This type of car is not what you are looking for.');
        }); 

        it("Should work properly when the year param is greater than 2010", function() { 
            let result = chooseYourCar.choosingType('Sedan', 'black', 2022);
            assert.equal(result, 'This black Sedan meets the requirements, that you have.');
        }); 

        it("Should work properly when the year param is equal to 2010", function() { 
            let result = chooseYourCar.choosingType('Sedan', 'black', 2010);
            assert.equal(result, 'This black Sedan meets the requirements, that you have.');
        }); 

        it("Should work properly when the year param is less than 2010", function() { 
            let result = chooseYourCar.choosingType('Sedan', 'black', 2009);
            assert.equal(result, 'This Sedan is too old for you, especially with that black color.');
        }); 
     }); 

     describe("Tests for the brandName function", function() { 
        it("Should throw an error when the brands param is not an array", function() { 
            assert.throws(() => chooseYourCar.brandName('BMW Toyota Peugeot', 1)
            , 'Invalid Information!');
        }); 

        it("Should throw an error when the index param is not a number", function() { 
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], '1')
            , 'Invalid Information!');
        }); 

        it("Should throw an error when the index param is less than zero", function() { 
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], -1)
            , 'Invalid Information!');
        }); 

        it("Should throw an error when the index param is greater than brands param length", function() { 
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 4)
            , 'Invalid Information!');
        }); 

        it("Should throw an error when the index param is equal than brands param length", function() { 
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 3)
            , 'Invalid Information!');
        }); 

        it("Should work properly", function() { 
            let result = chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1);
            assert.equal(result, 'BMW, Peugeot');
        }); 
     }); 

     describe("Tests for the carFuelConsumption function", function() { 
        it("Should throw an error when the distanceInKilometers param is not a number", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption('100', 1)
            , 'Invalid Information!');
        });

        it("Should throw an error when the distanceInKilometers param is less than zero", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 1)
            , 'Invalid Information!');
        });

        it("Should throw an error when the distanceInKilometers param is equal to zero", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption(0, 1)
            , 'Invalid Information!');
        });

        it("Should throw an error when the consumptedFuelInLiters param is not a number", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption(100, '1')
            , 'Invalid Information!');
        });

        it("Should throw an error when the consumptedFuelInLiters param is less than zero", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption(100, -1)
            , 'Invalid Information!');
        });

        it("Should throw an error when the consumptedFuelInLiters param is equal to zero", function() { 
            assert.throws(() => chooseYourCar.carFuelConsumption(100, 0)
            , 'Invalid Information!');
        });

        it("Should throw an error when the litersPerHundredKm variable is less than seven", function() { 
            let result = chooseYourCar.carFuelConsumption(100, 5);
            assert.equal(result, 'The car is efficient enough, it burns 5.00 liters/100 km.');
        });

        it("Should throw an error when the litersPerHundredKm variable is equal to seven", function() { 
            let result = chooseYourCar.carFuelConsumption(100, 7);
            assert.equal(result, 'The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it("Should throw an error when the litersPerHundredKm variable is greater than seven", function() { 
            let result = chooseYourCar.carFuelConsumption(100, 8);
            assert.equal(result, 'The car burns too much fuel - 8.00 liters!');
        });
     }); 
}); 