var num = NaN;
module.exports = {
    toCube: function(inpNumber) {
        if (typeof inpNumber === "number") {
            num = (inpNumber * inpNumber * inpNumber);
        } else {
            num = (Number(inpNumber) * Number(inpNumber) * Number(inpNumber));
        };
        return num;
    }
};