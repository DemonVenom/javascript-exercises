const repeatString = function(phrase, num) {

    let result = "";

    if (num >= 0) {

        for (let i = 0; i < num; i++) {

            result += phrase;
        }

    }
    else {
        result += "ERROR";
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
