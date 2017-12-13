var num = NaN;
module.exports = {
    toSquare: function(inpNumber) {
        if (typeof inpNumber === "number") {
            num = (inpNumber * inpNumber);
        } else {
            num = (Number(inpNumber) * Number(inpNumber));
        }
        return num;
    }
};