var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
var port = 5000 || process.env.PORT ;




app.listen(port); 