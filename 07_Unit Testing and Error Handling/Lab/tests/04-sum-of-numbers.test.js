const { sum } = require('../04-sum-of-numbers.js');
const { expect } = require('chai');


describe('Tests for the sum function', () => {
    it('Sould work properly', () => {
        expect(sum([1, 2, 3, 4])).to.be.equal(10);
    });

    it('Sould work properly with double numbers', () => {
        expect(sum([1.5, 2.5, 3.3, 4.7])).to.be.equal(12);
    });

    it('Sould work properly with negative numbers', () => {
        expect(sum([-1, -3, 2])).to.be.equal(-2);
    });

    it('Sould work properly with an empty array', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('Sould work properly when there are non-number elements', () => {
        expect(sum([1, 3, '4'])).to.be.equal(8);
    });
});