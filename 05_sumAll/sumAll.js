const sumAll = function(input1, input2) {

    let result = 0

    if (input1 < 0 || input2 < 0) {

        return "ERROR";
    }
    else if (input1 < 0 || input2 < 0) {

        return "ERROR";
    }
    else if (!Number.isInteger(input1) || !Number.isInteger(input2)) {

        return "ERROR";
    }
    else if (input1 > input2) {

        for (let i = input2; i <= input1; i++) {

            result += i;
        }

        return result;
    }
    else if (input1 < input2) {

        for (let i = input1; i <= input2; i++) {

            result += i;
        }

        return result;
    }
    else {

        return -1;
    }

};

// Do not edit below this line
module.exports = sumAll;
