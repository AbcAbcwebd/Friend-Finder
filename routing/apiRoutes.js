var express = require("express");
var path = require('path');
var app = express();
var quizObj = require('./../data/friends.js')

app.get('/api/quizes', function(req,res){
	res.json(quizObj);
});

module.exports = app;