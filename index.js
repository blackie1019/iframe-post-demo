var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

// respond with "hello world" when a GET request is made to the homepage
app.post('/PostTest', function(req, res) {
    var boday = req.body;
    res.send(boday);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  