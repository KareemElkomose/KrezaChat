var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
var port = 5000 || process.env.PORT ;

app.get('/', function(req, res) {
  res.send('Kreza is running!');
});


app.listen(port);