function Greeter() {
    this.greeting = "Hello World 44";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greeter();

