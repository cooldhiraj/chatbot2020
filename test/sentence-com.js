
module.exports.combinations = function ( inputs, min = 1, max = inputs.length ) {

    var combinations = require('combinations');
    var myArray = inputs
    var size = inputs.length;

    var arr = combinations(myArray);
    // maximum and minimum combination
    const result = arr.filter(arr => ( arr.length >= min && arr.length <= max ) );
    return result;
}
