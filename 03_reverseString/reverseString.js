const reverseString = function(input) {

    var result = ""

    for (let i = (input.length - 1); i > 0 - input.length; i--) {

        result += input.charAt(i);
    }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
