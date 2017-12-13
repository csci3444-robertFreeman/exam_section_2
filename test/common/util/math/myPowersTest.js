const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPowers.js');

const num1 = 3;
const num1String = "3";

suite('toPowers', function() {
    test('myPowers.toSquare(3) should return the number value of 9', function() {
        let result = myPowers.toSquare(num1);
        assert.equal(result, 9);
    });

    test('myPowers.toSquare(3) should return the type number', function() {
        let result = myPowers.toSquare(num1);
        assert.typeOf(result, 'number');
    });

    test('myPowers.toSquare("3") should return the number value of 9', function() {
        let result = myPowers.toSquare(num1String);
        assert.equal(result, 9);
    });

    test('myPowers.toCube(3) should return the number value of 27', function() {
        let result = myPowers.toCube(num1);
        assert.equal(result, 27);
    });

    test('myPowers.toCube(3) should return the type number', function() {
        let result = myPowers.toCube(num1);
        assert.typeOf(result, 'number');
    });

    test('myPowers.toCube("3") should return the number value of 27', function() {
        let result = myPowers.toCube(num1String);
        assert.equal(result, 27);
    });
});