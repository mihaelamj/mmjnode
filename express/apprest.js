
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//custom middleware - logger
app.use('/', function(req, res, next) {
   console.log('Request url: ' + req.url);
   console.log('Request params: ' + JSON.stringify(req.params));
   console.log('Request query: ' + JSON.stringify(req.query));
   next(); 
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ first:'John', last:'Doe' });
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

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

app.get('/api/person/:id', function(req, res) {
	// get that data from database
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(req, res) {
	// save to the database
});

app.delete('/api/person/:id', function(req, res) {
	// delete from the database
});

app.listen(port);