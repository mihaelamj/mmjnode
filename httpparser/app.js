var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    // var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    //better way
    // var html = fs.createReadStream(__dirname + '/index.htm', 'utf8');
    // var message = 'Hello World!!';
    // html = html.replace('{Message}', message);
    // res.end(html);
    
    //even better, a chunk at a time, but no templating
    fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
    
}).listen(1337, '127.0.0.1');

//http://localhost:1337/