//Dependencies

var express = require("express");
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routing/htmlRoutes.js');
app.use('/', index);

var PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// YOUR CODE GOES HERE
app.get("/api/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/api/wait-list", function (req, res) {
    res.json(waitList);
});





app.post('/recieve-reservation', function(req, res) {
    var localName = req.body.name;
    var localPhone = req.body.phone;
    var localEmail = req.body.email;
    var customerObj = {
    	name: localName,
    	phone: localPhone,
    	email: localEmail
    };
    if (reservations.length < 6){
    	reservations.push(customerObj);
    } else {
    	waitList.push(customerObj);
    };
    console.log(reservations)
    res.sendStatus(200);
});


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
