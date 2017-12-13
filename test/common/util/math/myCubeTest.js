const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube');

const num1 = 3;
const num1String = "3";
suite('toCube', function() {
    test('toCube() Should return number value of 27', function() {
        let result = myCube.toCube(num1);
        assert.equal(result, 27);
    });

    test('toCube() Should return type number', function() {
        let result = myCube.toCube(num1);
        assert.typeOf(num1, 'number');
    })

    test('toCube() Should return the number of 27', function() {
        let result = myCube.toCube(num1String);
        assert.equal(result, 27)
    })
});