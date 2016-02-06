//Angular Client/Browser code

angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);
    
function ctrlFunc() {
    
    this.people = clientPeople;
    // this.people = [
    //     {name: 'John Doe'},
    //     {name: 'Jane Doe'},
    //     {name: 'Jim Doe'}
    // ];
};
