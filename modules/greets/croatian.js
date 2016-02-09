//fetch strings from JSON file
var greetings = require("./greetings.json");

var greet = function() {
    console.log(greetings.hr);
}

module.exports = greet;