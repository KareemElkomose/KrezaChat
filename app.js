var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.get('/', function(req, res) {
  res.render(views/index); 
});


