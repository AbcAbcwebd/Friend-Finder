var express = require("express");
var path = require('path');
var app = express();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'../public/home.html'))
})

app.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname,'../public/survey.html'))
})


module.exports = app;