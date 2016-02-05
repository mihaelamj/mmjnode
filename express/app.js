//1. nmp install -> for nmp to create basic package.json
//2. nmp install express --save -> for nmp to install express and save the dependancy in package.json
//3. npm install ejs --save -> for npm to install ejs template fw and save the dependancy in package.json
//4. mkdir views -> make dir for express where you will put your views
//5. make index.ejs in views dir
//6. npm install body-parser --save -> for partsing the body of HTML document

var express = require('express');
var app = express();

//body-parser needs to be added via require, unlike a view engine (ejs), which is set on the express object
var bodyParser = require('body-parser');
//fetch the urlencoded body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//fetch port from env or set it
var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));

//setup template engine
app.set('view engine', 'ejs');

//custom middleware - logger
app.use('/', function(req, res, next) {
   console.log('Request url: ' + req.url);
   console.log('Request params: ' + JSON.stringify(req.params));
   console.log('Request query: ' + JSON.stringify(req.query));
   next(); 
});

//will respond to GET request
app.get('/', function(req, res) {
    // res.send('<html><head></head><<body><h1>Hello world!</h1></body></html>');
    
    //add stylesheet manually
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');

    //render index that has stylesheet included in page, via ejs
    res.render('index');
});

//route to /api
app.get('/api', function(req, res) {
    res.json({ first:'John', last:'Doe' });
});

//variable
app.get('/person/:id', function(req, res) {
    
    //remder manually
    // res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
    
    //render using ejs with params
    // res.render('person', {ID: req.params.id});
    
    //render using ejs with params and query string
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

//post to person using urlencoded body parser as middleware
app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you urlencoded!');
    console.log(req.body);
    console.log(req.body.first);
    console.log(req.body.last);
});

//post to personjson using json body parser as middleware
app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you JSON!');
    console.log(req.body);
    console.log(req.body.first);
    console.log(req.body.last);
});

app.listen(port);