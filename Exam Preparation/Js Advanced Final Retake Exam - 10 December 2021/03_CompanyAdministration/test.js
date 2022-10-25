const { companyAdministration } = require('./companyAdministration.js');
const { assert } = require('chai');

describe("Tests for the companyAdministration object", function() { 
    describe("Tests for the hiringEmployee function", function() { 
        it("Should throw an error when position param is different from Programmer", function() { 
            assert.throws(() => companyAdministration.hiringEmployee('Georgi Kostadinov', 'CTO', 5)
            , 'We are not looking for workers for this position.');
        }); 

        it("Should successfully hire an employee when yearsExperience are greater than 3", function() { 
            let result = companyAdministration.hiringEmployee('Georgi Kostadinov', 'Programmer', 5);
            assert.equal(result, 'Georgi Kostadinov was successfully hired for the position Programmer.');
        }); 

        it("Should successfully hire an employee when yearsExperience is equal to 3", function() { 
            let result = companyAdministration.hiringEmployee('Georgi Kostadinov', 'Programmer', 3);
            assert.equal(result, 'Georgi Kostadinov was successfully hired for the position Programmer.');
        }); 

        it("Should successfully not hire an employee", function() { 
            let result = companyAdministration.hiringEmployee('Georgi Kostadinov', 'Programmer', 2);
            assert.equal(result, 'Georgi Kostadinov is not approved for this position.');
        });
    }); 

    describe("Tests for the calculateSalary function", function() { 
        it("Should throw an error when hours param is not a number", function() { 
            assert.throws(() => companyAdministration.calculateSalary('10')
            , 'Invalid hours');
        }); 

        it("Should throw an error when hours param is less than zero", function() { 
            assert.throws(() => companyAdministration.calculateSalary(-1)
            , 'Invalid hours');
        }); 

        it("Should work properly when the hours param is less than 160", function() { 
            let result = companyAdministration.calculateSalary(10);
            assert.equal(result, 150);
        }); 

        it("Should work properly when the hours param is more than 160", function() { 
            let result = companyAdministration.calculateSalary(170);
            assert.equal(result, 3550);
        }); 
    }); 

    describe("Tests for the firedEmployee function", function() { 
        it("Should throw an error when employees param is not an array", function() { 
            assert.throws(() => companyAdministration.firedEmployee('Geirge, Lyubo, Kriso', 1)
            , 'Invalid input');
        }); 

        it("Should throw an error when index param is not a number", function() { 
            assert.throws(() => companyAdministration.firedEmployee(['George', 'Lyubo', 'Kriso'], '1')
            , 'Invalid input');
        }); 

        it("Should throw an error when index param is less than zero", function() { 
            assert.throws(() => companyAdministration.firedEmployee(['George', 'Lyubo', 'Kriso'], -1)
            , 'Invalid input');
        }); 

        it("Should throw an error when index param is bigger than the size of the array", function() { 
            assert.throws(() => companyAdministration.firedEmployee(['George', 'Lyubo', 'Kriso'], 4)
            , 'Invalid input');
        }); 

        it("Should throw an error when index param is equal to size of the array", function() { 
            assert.throws(() => companyAdministration.firedEmployee(['George', 'Lyubo', 'Kriso'], 3)
            , 'Invalid input');
        }); 

        it("Should work properly with valid data", function() { 
            let result = companyAdministration.firedEmployee(['George', 'Lyubo', 'Kriso'], 2)
            assert.equal(result, 'George, Lyubo');
        }); 
    }); 
});