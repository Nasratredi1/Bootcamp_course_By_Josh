function getUserFromDatabase(callback) {
    // simulates getting data from db
    setTimeout(() => callback({ firstName: 'Jordan', lastName: 'Hayashi'}), 1000);
}


function greetUser() {
    getUserFromDatabase(function(user) { // function expect object which is user anonymous function
        console.log('Hi, ' + user.firstName);
    });
}

greetUser();  // output Hi jordan

 // query db for user,then greet the user
// function greetUser(){
//     var user = getUserSync();
//     console.log('Hi, ' +user.firstName);
// }

// function addOne(x) {
//     return x + 1;
// }

// addOne(12)

// // start of addOne
// x = 12
// return x + 1

// you can write like this

// function sayHiToObject(obj){
//     console.log('Hi, ' + obj.firstName);

// }

// function sayHiToObject({firstName: 'Nasrat'}){
//     console.log('Hi, ' + obj.firstName);
    
// }

