var nlp = require('wink-nlp-utils');


var data = require("./data/present-simple-tense.json");

var sentenceRules = "[i|we|you|they]";

//formating raw json to pct rules
for (var i = 0; i<data.length; i++) {

    if (i == 0) {
        sentenceRules = sentenceRules.concat(' ', '[', data[i]);
    } else if ((i>0) && (i < data.length -1)) {

        sentenceRules = sentenceRules.concat('|', data[i]);

    }else if (i == data.length -1) {
        sentenceRules = sentenceRules.concat('|', data[i], ']');
    }

}

//splitting to all possible string array
var sentenceData = nlp.string.composeCorpus( sentenceRules );

const dataWrite = require('./internal_modules/dataWrite');

var sentence = sentenceData;
var fileName = './data/sentence/pstSentence.json';
const msg = "Succesfully sentence created";

dataWrite .save({sentence, fileName});