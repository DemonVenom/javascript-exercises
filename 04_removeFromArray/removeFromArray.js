const removeFromArray = function(input, ...args) {

    return input.filter(element => !args.includes(element));

    // var removes = new Set(args);
    //
    // return input.filter(function(args) {
    //     return !removes.has(args)
    // });

};

// Do not edit below this line
module.exports = removeFromArray;
