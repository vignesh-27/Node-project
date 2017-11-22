
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/scripts'));
app.set('view engine', 'ejs');

var router = express.Router();

app.get('/', function(req, res, next) { // route for '/'
var temp = 50;  //here you assign temp variable with needed value
var total = temp+10;
res.render('index', { //render the index.ejs
  name: total});
});

// app.get('/', function(req, res) {
//     var name = 'vignesh';
// res.render('home.html', {name: name});
// });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})