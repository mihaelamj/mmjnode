//1. npm init -> for nmp to create basic package.json
//2. npm install 
//3. make mongo database on mongolab 
//4. npm install mongoose --save -> install mongo node driver

// To connect using the mongo shell:
//      mongo ds059155.mongolab.com:59155/mmjtest -u <dbuser> -p <dbpassword>
// To connect using a driver via the standard MongoDB URI (what's this?):
//      mongodb://<dbuser>:<dbpassword>@ds059155.mongolab.com:59155/mmjtest

var express = require('express');
var app = express();

//fetch mongoose
var mongoose = require('mongoose');

//connect
mongoose.connect(
    'mongodb://admin:admin@ds059155.mongolab.com:59155/mmjtest'
);

//make schema
var Schema = mongoose.Schema;
var personSchema = new Schema({
    first: String,
    last: String,
    address:String
});
//person function constructor
var Person = mongoose.model('Person', personSchema);
//make person object
var john = Person({
    first: 'John',
    last: 'Doe',
    address:'5th Avenue, NY'
});
//save person
john.save(function(err){
    if (err) {
        throw err;
    }
    console.log('person saved');
});
//make another person object
var jane = Person({
    first: 'Jane',
    last: 'Doe',
    address:'5th Avenue, NY'
});
jane.save(function(err){
    if (err) {
        throw err;
    }
    console.log('person saved');
});

//fetch controllers
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

//fetch port from env or set it
var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));
//setup template engine
app.set('view engine', 'ejs');

//logger
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
    
    //find person
    Person.find({}, function(err, users){
            if (err) {
            throw err;
        }
       console.log(users);
    });
    
	next();
});

//use controllers
htmlController(app);
apiController(app);

//port
app.listen(port);