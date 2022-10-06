const { createCalculator } = require('../07-add-subtract.js');
const { expect } = require('chai');

describe('Tests for the createCalculator function', () => {
    describe('Tests for the add function', () => {
        it('Sould return an object with valid properties', () => {
            let calculatorObj = createCalculator();

            expect(calculatorObj).to.have.ownProperty('add');
            expect(calculatorObj).to.have.ownProperty('subtract');
            expect(calculatorObj).to.have.ownProperty('get');
        });

        it('Sould work with a number param', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add(5);
            calculatorObj.add(7);
            let value = calculatorObj.get();

            expect(value).to.be.equal(12);
        }); 
        
        it('Sould work with a string param', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add('5');
            calculatorObj.add('7');
            let value = calculatorObj.get();

            expect(value).to.be.equal(12);
        });  

        it('Sould work with floating point numbers', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add('5.5');
            calculatorObj.add(7);
            let value = calculatorObj.get();

            expect(value).to.be.equal(12.5);
        });  
    });  
    
    describe('Tests for the subtract function', () => {
        it('Sould work with a number param', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add(5);
            calculatorObj.subtract(2);
            let value = calculatorObj.get();

            expect(value).to.be.equal(3);
        }); 
        
        it('Sould work with a string param', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add('5');
            calculatorObj.subtract('-2');
            let value = calculatorObj.get();

            expect(value).to.be.equal(7);
        });  

        it('Sould work with floating point numbers', () => {
            let calculatorObj = createCalculator();
            calculatorObj.add(12);
            calculatorObj.subtract('-3');
            let value = calculatorObj.get();

            expect(value).to.be.equal(15);
        }); 
    });

    describe('Tests for the get function', () => {
        it('Sould return a valid value', () => {
            let calculatorObj = createCalculator();

            calculatorObj.add(5);
            calculatorObj.subtract(2);
            expect(calculatorObj.get()).to.be.equal(3);
        });  
    });
    
});