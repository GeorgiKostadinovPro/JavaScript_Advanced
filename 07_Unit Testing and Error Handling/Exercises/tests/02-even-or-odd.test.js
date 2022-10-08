const { isOddOrEven } = require('../02-even-or-odd.js');
const { expect } = require('chai');

describe('Tests for the isOddOrEven function', () => {
    it('Sould return undefined when the param is number', () => {
        expect(isOddOrEven(15)).to.be.undefined;
    });

    it('Sould return undefined when the param is array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Sould work properly with odd strings', () => {
        expect(isOddOrEven('hello')).to.be.equal('odd');
    });

    it('Sould work properly with even strings', () => {
        expect(isOddOrEven('JavaScript')).to.be.equal('even');
    });

    it('Sould work properly with multiple strings', () => {
        expect(isOddOrEven('Scala')).to.be.equal('odd');
        expect(isOddOrEven('C++')).to.be.equal('odd');
        expect(isOddOrEven('JavaScript')).to.be.equal('even');
        expect(isOddOrEven('CSharp')).to.be.equal('even');
    });
});