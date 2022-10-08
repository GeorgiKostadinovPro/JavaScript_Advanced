let { mathEnforcer } = require('../04-math-enforcer.js');
let { expect } = require('chai');

describe('mathEnforcer', () => {
    describe('AddFive', () => {
        it('should return undefined when the param is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should work properly with integers', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('should work properly with floats', () => {
            expect(mathEnforcer.addFive(5.88)).to.be.closeTo(10.88, 0.01);
        });

        it('should work properly with negative integers', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should work properly with negative floats', () => {
            expect(mathEnforcer.addFive(-5.88)).to.be.closeTo(-0.88, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined when the param is not a number', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });

        it('should work properly with integers', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });

        it('should work properly with floats', () => {
            expect(mathEnforcer.subtractTen(15.53)).to.be.closeTo(5.53, 0.01);
        });

        it('should work properly with negative integers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });

        it('should work properly with negative floats', () => {
            expect(mathEnforcer.subtractTen(-5.53)).to.be.closeTo(-15.53, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined when the first param is not a number', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });

        it('should return undefined when the second param is not a number', () => {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        });

        it('should work properly with integers', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        });

        it('should work with floats', () => {
            expect(mathEnforcer.sum(5.34, 5.23)).to.be.closeTo(10.57, 0.01);
        });

        it('should work with negative integers', () => {
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
        });

        it('should work with negative floats', () => {
            expect(mathEnforcer.sum(-5.53, 5.21)).to.be.closeTo(-0.32, 0.01);
        });
    });
});