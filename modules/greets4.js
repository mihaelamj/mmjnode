function Greeter() {
    this.greeting = "Hello World 44 Function";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greeter;