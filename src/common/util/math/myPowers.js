var myCube = require('../math/myCube.js');
var mySquare = require('../math/mySquare.js');

module.exports = {
    toCube: function(inpNumb) {
        return myCube.toCube(inpNumb);
    },

    toSquare: function(inpNumb) {
        return mySquare.toSquare(inpNumb);
    }
};