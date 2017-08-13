var express = require("express");
var path = require('path');
var app = express();
var quizObj = require('./../data/quizes.js')

var seedData = require('./../data/seed-data.js');
var allSurveyResults = seedData;

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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
    var bestMatch = {
        name: "None found",
        image: 'https://4.bp.blogspot.com/-1Y4drbZZXyc/V883SK4-6RI/AAAAAAAABg0/QbqMFMJaJD8sSUhpM2AtctZMv-3DeNjUgCK4B/s400/slightly-frowning-face.png',
        score: 51
    };
    // Loops through all profiles
    for (var i = 0; i < allSurveyResults.length; i++){
        // Excludes profiles that have the same name as the existing user (to avoid matching with self) as well as users that are not gender compatible. 
        if (allSurveyResults[i].name !== localName && localDesiredGenders.indexOf(allSurveyResults[i].gender) >= 0 && allSurveyResults[i].desiredGenders.indexOf(localGender) >= 0){
            var diffScore = 0;
            for (var x = 0; x < 10; x++){
                diffScore = diffScore + Math.abs(parseInt(allSurveyResults[i].answers[x]) - parseInt(localAnswers[x]));
            };
            if (diffScore < bestMatch.score){
                bestMatch.name = allSurveyResults[i].name;
                bestMatch.image = allSurveyResults[i].image;
                bestMatch.score = diffScore;
            };
        };
    };
    

    res.json(bestMatch);
});

module.exports = app;