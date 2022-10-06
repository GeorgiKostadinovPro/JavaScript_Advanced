const { rgbToHexColor } = require('../06-rgb-to-hex.js');
const { expect } = require('chai');


describe('Tests for the rgbToHexColor function', () => {
    it('Sould return undifined when red param is not integer', () => {
        expect(rgbToHexColor(100.5, 255, 255)).to.be.undefined;
    });

    it('Sould return undifined when red param is less than zero', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });

    it('Sould return undifined when red param is bigger than 255', () => {
        expect(rgbToHexColor(256, 255, 255)).to.be.undefined;
    });

    it('Sould return undifined when green param is not integer', () => {
        expect(rgbToHexColor(255, 100.5, 255)).to.be.undefined;
    });

    it('Sould return undifined when green param is less than zero', () => {
        expect(rgbToHexColor(255, -1, 255)).to.be.undefined;
    });

    it('Sould return undifined when green param is bigger than 255', () => {
        expect(rgbToHexColor(255, 256, 255)).to.be.undefined;
    });

    it('Sould return undifined when blue param is not integer', () => {
        expect(rgbToHexColor(255, 255, 100.5)).to.be.undefined;
    });

    it('Sould return undifined when blue param is less than zero', () => {
        expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
    });

    it('Sould return undifined when blue param is bigger than 255', () => {
        expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
    });

    it('Should work properly', () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it('Should work properly with floating point integers', () => {
        expect(rgbToHexColor(0.0, 0.0, 0.0)).to.be.equal('#000000');
    });
});