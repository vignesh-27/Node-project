//Module includes
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
   res.sendFile('contact.html')   
});

app.post('/form', function(req, res){

    var fname= req.body.fname;  
    var lname= req.body.lname;
    var designation = req.body.designation;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var message = req.body.message;  
        res.send("The created Username and Password you posted:<br/> First Name: "+ fname + 
        "<br/>Last Name: "+ lname + "<br/>Designation: " + designation + "<br/>Email: " + email +
        "<br/> Mobile No: " + mobile + "<br/>Message: " + message );
        console.log(req.body.username);
    });


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});