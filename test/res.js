const _ = require('lodash');
const wordMatch = require('./wordMatch');
const sc = require('./sentence-com');
const sp = require('./permutation');

const str = 'hii are you'
var query = str.split(' ');

var resArray = [];

query.forEach(element => {


    if (wordMatch.search(element) != null) {

        const resSize = wordMatch.search(element)[0].item.res.length;

        if (resSize > 1 && !resSize < 1) {

            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            const ind = getRandomInt(resSize);

            //getting random word response
            resArray = resArray.concat(wordMatch.search(element)[0].item.res[ind]);

        } else if (resSize == 1) {

            //match response word from patter and storing in array all possiblity
            resArray = resArray.concat(wordMatch.search(element)[0].item.res[0]);

        };

    }




});

//this word can be used
const finalArray = _.uniq(resArray);
const size = finalArray.length
console.log(finalArray);
console.log(sc.combinations(finalArray, size, size));