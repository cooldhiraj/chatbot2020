// https://www.npmjs.com/package/bayes-classifier

var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()


const path = './model/classifier.json';

var storedClassifier = require(path);
classifier.restore(storedClassifier);

console.log(classifier.classify('processing'));