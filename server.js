//Dependencies

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routing/htmlRoutes.js');
app.use('/', index);
var jsonLinking = require('./routing/apiRoutes.js');
app.use('/', jsonLinking);
// app.use('/api/friends', jsonLinking);

var PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
