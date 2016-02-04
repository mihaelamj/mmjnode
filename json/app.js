var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    
    //make JSON object
    var obj = {
        firstname: 'John',
        lastname: 'Appleseed'
        };
    
    // res.end(obj.toString());
    
    //serialize object for the browser
    res.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');

//http://localhost:1337/