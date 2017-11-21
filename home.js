
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
res.sendFile('index.html');
});

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/home.html'));
//  });

// app.get('/', function(req, res) {
//         res.sendFile('/career.html');
// });
   
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/aboutus.html'));
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/web.js'));
// });


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})