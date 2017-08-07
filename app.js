var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
var port = 5000 || process.env.PORT ;

app.get('/', function(req, res) {
  res.render(views/index.html); 
});


app.listen(port); 