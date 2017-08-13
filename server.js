//Dependencies

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routing/htmlRoutes.js');
app.use('/', index);
var jsonLinking = require('./routing/apiRoutes.js');
app.use('/', jsonLinking);
var allSurveyResults = [];

var PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 







app.post('/recieve-survey-results', function(req, res) {
    var localName = req.body.name;
    var localImage = req.body.imageURL;
    var localAnswers = req.body.surveyResults;
    var userObj = {
    	name: localName,
    	image: localImage,
    	answers: localAnswers
    };
    allSurveyResults.push(userObj);
    console.log(allSurveyResults);
    res.sendStatus(200);
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
