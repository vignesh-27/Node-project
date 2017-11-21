var http = require('http');
var dt = require("./mymodule");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The current Date & Time is:"+dt.myDateTime());
    var q = url.parse(req.url, true).query;
    var text = q.year+" "+q.name;
    res.end('Hello World!');
}).listen(8080);
console.log("hello world !");