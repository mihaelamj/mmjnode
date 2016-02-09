var greets = require("./greets");
greets.english();
greets.croatian();

var greets1 = require("./greets1");
greets1();

var greets2 = require("./greets2").greet;
greets2();


var greet3 = require("./greets3");
greet3.greet();
//change greeting
greet3.greeting = "Hello World 44 Changed";

var greet3a = require("./greets3.js");
greet3a.greet();

var Greet4 = require("./greets4");
var greet4a = new Greet4();
greet4a.greet();

var greet5 = require("./greets5");
greet5.greet();