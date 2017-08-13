var express = require("express");
var path = require('path');
var app = express();

app.get('/api/quizes', function(req,res){
	res.json(path.join(__dirname,'../data/friends.js'));
});

module.exports = app;