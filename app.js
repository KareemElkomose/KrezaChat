var express = require('express');
var app = express();var bodyParser = require('body-parser');
var jwt= require('jsonwebtoken'); 

var app = express();
//var database = require('./core/db.js');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var app = express();
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.get('/', function(req, res) {
  res.render(views/index); 
});


