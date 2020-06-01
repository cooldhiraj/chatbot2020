module.exports.permutation = function ( inputs, min = 1, max = inputs.length ) {
    
    var permArr = [],
        usedChars = [];

    function permute(input, newMin, newMax) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        // console.log(permArr);
        // const result = permArr.filter(permArr => ( permArr.length >= newMin && permArr.length <= newMax ) );
        console.log(permArr);
        return permArr;
    };

    JSON.stringify(permute(inputs, min, max));
}