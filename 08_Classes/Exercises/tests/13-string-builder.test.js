const { StringBuilder } = require('../13.string-builder.js');
const { assert } = require('chai');

describe("Tests for the StringBuilder class", function() { 
    describe("Tests for the constructor", function() { 
        it("Should create instance without string param", function() { 
            assert.doesNotThrow(() => new StringBuilder());
        }); 

        it("Should throw an error when the param is not of type string", function() { 
            assert.throws(() => new StringBuilder(10), 'Argument must be a string');
        }); 

        it("Should work properly with string param", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            assert.equal(stringBuilder.toString(), 'JavaScript');
        }); 
    });

    describe("Tests for the append function", function() { 
        it("Should throw an error when the param is not of type string", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            assert.throws(() => stringBuilder.append(10), 'Argument must be a string');
        }); 

        it("Should work properly with string param", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            stringBuilder.append('-Advanced');
            assert.equal(stringBuilder.toString(), 'JavaScript-Advanced');
        }); 
    });

    describe("Tests for the prepend function", function() { 
        it("Should throw an error when the param is not of type string", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            assert.throws(() => stringBuilder.prepend(10), 'Argument must be a string');
        }); 

        it("Should work properly with string param", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            stringBuilder.prepend('CSharp > ');
            assert.equal(stringBuilder.toString(), 'CSharp > JavaScript');
        }); 
    });

    describe("Tests for the insertAt function", function() { 
        it("Should throw an error when the first param is not of type string", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            assert.throws(() => stringBuilder.insertAt(10, 9), 'Argument must be a string');
        }); 

        it("Should work properly with string param", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            stringBuilder.insertAt('-', 4);
            assert.equal(stringBuilder.toString(), 'Java-Script');
        }); 
    });

    describe("Tests for the remove function", function() { 
        it("Should work properly", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            stringBuilder.remove(4, 7);
            assert.equal(stringBuilder.toString(), 'Java');
        }); 
    });

    describe("Tests for the toString function", function() { 
        it("Should work properly", function() { 
            let stringBuilder = new StringBuilder('JavaScript');
            assert.equal(stringBuilder.toString(), 'JavaScript');
        }); 

        it('toString should work with multiple executed operations before', () => {
            let stringBuilder = new StringBuilder();
            let expectedResult = '\n J \n\r S\t2022   ';
        
            expectedResult.split('').forEach(s => {
                stringBuilder.append(s);
                stringBuilder.prepend(s); 
            });
        
            stringBuilder.insertAt('test', 4);
            stringBuilder.remove(2, 4);
        
            assert.equal(stringBuilder.toString(), '  st202\tS \r\n J \n\n J \n\r S\t2022   ');
        });
    });
});