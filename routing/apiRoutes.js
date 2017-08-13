var express = require("express");
var path = require('path');
var app = express();
var quizObj = require('./../data/quizes.js')

var seedData = require('./../data/seed-data.js');
var allSurveyResults = [];

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/api/seed-data', function(req,res){
    res.json(seedData);
});

app.get('/api/quizes', function(req,res){
	res.json(quizObj);
});

app.get('/api/friends', function(req,res){
	res.json(allSurveyResults);
});

app.post('/api/friends', function(req, res) {
    // Recieves and saves the new quiz data
    var localName = req.body.name;
    var localImage = req.body.imageURL;
    var localGender = req.body.gender;
    var localDesiredGenders = req.body.desiredGenders;
    var localAnswers = req.body.surveyResults;
    var userObj = {
    	name: localName,
    	image: localImage,
    	gender: localGender,
    	desiredGenders: localDesiredGenders,
    	answers: localAnswers
    };
    allSurveyResults.push(userObj);

    // Finds best match
    

    res.sendStatus(200);
});

module.exports = app;