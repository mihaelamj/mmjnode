var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    //write header
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    //route to known routes
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else  if (req.url === '/rest') {
        var obj = {
            firstname: 'John',
            lastname: 'Doe'         
        }
        res.end(JSON.stringify(obj));
    } else {
        //handle unknown route
        res.writeHead('404');
        res.end(); 
    }
    
}).listen(1337, '127.0.0.1');