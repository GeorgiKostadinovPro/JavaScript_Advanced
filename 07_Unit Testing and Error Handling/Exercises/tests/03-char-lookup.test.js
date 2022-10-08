const { lookupChar } = require('../03-char-lookup.js');
const { expect } = require('chai');

describe('Tests for the isOddOrEven function', () => {
    it('Sould return undefined when the first param is not a string', () => {
        expect(lookupChar(15, 2)).to.be.undefined;
    });

    it('Sould return undefined when the second param is not an integer', () => {
        expect(lookupChar('JavaScript', 2.5)).to.be.undefined;
    });

    it('Sould should return incorrect index message when index is less than zero', () => {
        expect(lookupChar('JavaScript', -1)).to.be.equal('Incorrect index');
    });

    it('Sould should return incorrect index message when index is equal to the size of the first param', () => {
        expect(lookupChar('JavaScript', 10)).to.be.equal('Incorrect index');
    });

    it('Sould should return incorrect index message when index is bigger than the size of the first param', () => {
        expect(lookupChar('JavaScript', 11)).to.be.equal('Incorrect index');
    });

    it('Sould should work properly', () => {
        expect(lookupChar('JavaScript', 4)).to.be.equal('S');
    });
});