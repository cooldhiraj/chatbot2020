module.exports.search = function ( inputs ) {
    // inputs parameter is word
 
    const Fuse = require('fuse.js');
   const _ = require('lodash');

    const resWord = [
        {
            word: ['is'],
            res: ['is']
        },
        {
            word: ['hii', 'hi', 'hiii', 'hiiii'],
            res: ['nice', 'tell', 'hmm']
        },
        {
            word: ['do', 'does'],
            res: ['yes', 'no']
        },
        {
            word: ['will'],
            res: ['will']
        },
        {
            word: ['you', 'your'],
            res: ['my', 'i']
        },
        {
            word: ['are'],
            res: ['am']
        },
        {
            word: ['i'],
            res: ['you']
        }
    ];

    const options = {
        // isCaseSensitive: false,
        // includeScore: true,
        // shouldSort: true,
        findAllMatches: true,
        // minMatchCharLength: 1,
        // location: 100,
        threshold: 0.0,
        distance: 100,
        // useExtendedSearch: false,
        keys: ['word']
    };

    const fuse = new Fuse(resWord, options);

    // Change the pattern
    const pattern = inputs;

    const resData = fuse.search(pattern);

    if (_.isEmpty(resData)) {
        return null
    }

    return resData;

}