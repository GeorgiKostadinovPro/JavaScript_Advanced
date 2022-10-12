const { PaymentPackage } = require('../12-payment-package.js');
const { assert } = require('chai');

describe('Tests for the PaymentPackage class', function() { 
    describe('Tests for name getter and setter', function() {
        it('Should throw an error when the name is not a string', function() { 
            assert.throws(() => new PaymentPackage(1000, 1500), 'Name must be a non-empty string');
        });

        it('Should throw an error when the name\'s length is zero', function() { 
            assert.throws(() => new PaymentPackage('', 1500), 'Name must be a non-empty string');
        });
        
        it('Should work properly', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.name = 'HR Services 2.0';

            assert.equal(paymentPackage.name, 'HR Services 2.0');
        });
    });

    describe('Tests for value getter and setter', function() {
        it('Should throw an error when the value is not a number', function() { 
            assert.throws(() => new PaymentPackage('HR Services', '1500'), 'Value must be a non-negative number');
        });

        it('Should throw an error when the value is less than zero', function() { 
            assert.throws(() => new PaymentPackage('HR Services', -1500), 'Value must be a non-negative number');
        });

        it('Should workm properly when value is zero', function() {
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            assert.doesNotThrow(() => paymentPackage.value = 0);
        });
        
        it('Should work properly', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.value = 1800;

            assert.equal(paymentPackage.value, 1800);
        });
    });

    describe('Tests for VAT getter and setter', function() {
        it('Should initially set the VAT\'s value to 20', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            assert.equal(paymentPackage.VAT, 20);
        });

        it('Should throw an error when VAT\'s value is not a number', function() {
            let paymentPackage = new PaymentPackage('HR Services', 1500);
             
            assert.throws(() => {
                paymentPackage.VAT = '20';
            }, 'VAT must be a non-negative number');
        });

        it('Should throw an error when VAT\'s value is less than zero', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);

            assert.throws(() => {
                paymentPackage.VAT = -20;
            }, 'VAT must be a non-negative number');
        });

        it('Should work properly', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.VAT = 50;
            assert.equal(paymentPackage.VAT, 50);
        });
    });

    describe('Tests for active getter and setter', function() {
        it('Should initially set the active\'s value to true', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            assert.equal(paymentPackage.active, true);
        });

        it('Should throw an error when active\'s value is not a boolean', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);

            assert.throws(() => {
                paymentPackage.active = 'true';
            }, 'Active status must be a boolean');
        });

        it('Should work properly', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });

    describe('Tests for toString function', function() {
        it('Should work properly with active property set to true', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            let actualResult = paymentPackage.toString();

            let expectedResult = ['Package: HR Services', 
                                  '- Value (excl. VAT): 1500' , 
                                  '- Value (VAT 20%): 1800'].join('\n');
            
            assert.equal(actualResult, expectedResult);
        });

        it('Should work properly with active property set to false', function() { 
            let paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.active = false;
            let actualResult = paymentPackage.toString();

            let expectedResult = ['Package: HR Services (inactive)', 
                                  '- Value (excl. VAT): 1500' , 
                                  '- Value (VAT 20%): 1800'].join('\n');
            
            assert.equal(actualResult, expectedResult);
        });
    });
});