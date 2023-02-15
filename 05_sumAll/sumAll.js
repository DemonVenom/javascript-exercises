const sumAll = function(input, asdf) {

    let result = 0

    if (input < 0 || asdf < 0) {

        return "ERROR";
    }
    else if (input < 0 || asdf < 0) {

        return "ERROR";
    }
    else if (!Number.isInteger(input) || !Number.isInteger(asdf)) {

        return "ERROR";
    }
    else if (input > asdf) {

        for (let i = asdf; i <= input; i++) {

            result += i;
        }

        return result;
    }
    else if (input < asdf) {

        for (let i = input; i <= asdf; i++) {

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
