const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare');

const num1 = 2;
const num1String = "2";

suite('toSquare', function() {
    test('toSquare() Should return number value of 4', function() {
        let result = mySquare.toSquare(num1);
        assert.equal(result, 4);
    });

    test('toSquare() Should return type number', function() {
        let result = mySquare.toSquare(num1);
        assert.typeOf(num1, 'number');
    })

    test('toSquare() Should return the number of 4', function() {
        let result = mySquare.toSquare(num1String);
        assert.equal(result, 4)
    })
});