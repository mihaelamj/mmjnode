
//1. npm install body-parser --save -> for partsing the body of HTML document

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
   
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.get('/person/:id', function(req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});
	
	app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank you!');
		console.log('first: ' + req.body.first);
		console.log('last: ' + req.body.last);
	});
    
};