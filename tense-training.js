var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()

const pct = require('./data/sentence/pctSentence.json');
const pst = require('./data/sentence/pstSentence.json');


classifier.addDocuments(pct, 'present continous tense')
classifier.addDocuments(pst, 'present simple tense')


classifier.train()

// Storing classifier
var trainModel = './model/train.json';

const dataWrite = require('./internal_modules/dataWrite');

const path = './model/classifier.json';

// classifier = JSON.stringify(classifier);
const fs = require('fs');
classifier = JSON.stringify(classifier);


//writing train model into file
fs.writeFileSync(path, classifier);