
var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8000));
//app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname+'/career.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/home.html'));
 });

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname+'/career.html'));
});
   
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/aboutus.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/web.js'));
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})