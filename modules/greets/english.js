//fetch strings from JSON file
var greetings = require("./greetings.json");

var greet = function() {
    console.log(greetings.en);
}

module.exports = greet;