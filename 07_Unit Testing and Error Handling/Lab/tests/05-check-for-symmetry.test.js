const { isSymmetric } = require('../05-check-for-symmetry.js');
const { expect } = require('chai');


describe('Tests for the isSymmetric function', () => {
    it('Sould return false when the param is not an array', () => {
        expect(isSymmetric('1 2 3 4 5')).to.be.false;
    });

    it('Sould work properly when the array is empty', () => {
        expect(isSymmetric([])).to.be.true;
    });
    
    it('Sould work properly when the array is symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
    
    it('Sould work properly with array of non-numeric type', () => {
        expect(isSymmetric(['1', '2', '3', '2', '1'])).to.be.true;
    });

    it('Sould work properly when the array is non-symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4, 4])).to.be.false;
    });

    it('Sould work properly with array of non-numeric type', () => {
        expect(isSymmetric(['1', '2', '3', '4', '5'])).to.be.false;
    });

    it('Sould work properly with array of different elements type', () => {
        expect(isSymmetric([1, 2, 3, 2, '1'])).to.be.false;
    });
});