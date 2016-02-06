//1. nmp init -> for nmp to create basic package.json
//2. nmp install express --save -> for nmp to install express and save the dependancy in package.json
//3. npm install ejs --save -> for npm to install ejs template fw and save the dependancy in package.json
//4. mkdir public
//5. mkdir views
//6. make index.ejs in views dir
//7. make js folder in public and make app.js file there - client side js

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.render('index'); 
});
//start
app.listen(port);