// this is a global scope . when you write in console this they show the output window.

// function whatIsThis(){
//     console.log(this);
// }

// var person = {
//     firstName: 'Nasrat',
//     lastName: 'Redi',
//     whatIsThis: function(){
//         console.log(this);
//     },
//     greet: function() {
//         console.log('Hi,' + this.firstName)
//     }
// };

// person.whatIsThis(); // print the object all property.
// person.greet(); // Hi, Nasrat

// /*
// You can set 'this' manually by using below function.
// bind(), call(), apply()

// call function run the function immedietly. whereas call return a new function

// you can pass array in apply function

// */

// var student = {
//     firstName: 'john',
//     lastName: 'smith',
//     // greet: function() {
//     //     console.log('Hi,' + this.firstName)
//     // }
// };

// student.greet =person.greet;
// //student.greet();

// var studentGreet = person.greet.bind(student); // call on that time whey you crate within object function

// //student.greet();

// //person.greet.call(student);
// var arr = ['hi'];

// person.greet.apply(student,arr);

// //console.log(JSON.stringify(student));

// // Arrow Notation

// var newPerson = {
//     firstNam: 'Ahmad',
//     lastName: 'Khan',
//     greet: () => {
//     console.log('hi, ' + this.firstNam)
//     }

// };

// newPerson.greet();

// lexically scoped.

var x = 42;

function setx() {
    var x = 50;

    function printx(){
        console.log(x);
    }
    printx();

}
setx();

// Josh code from Github

// NOTE: this doesn't work as a node script, since they are run as modules
console.log(this);

function whatIsThis() {
    console.log(this);
}

whatIsThis();

// =======================================

var person = {
    firstName: 'Jordan',
    lastName: 'Hayashi',
    greet: function() { console.log('Hi, ' + this.firstName) }
};

person.greet();

// =====================================

var student = {
    firstName: 'John',
    lastName: 'Doe'
};


student.greet = person.greet;

student.greet();

// ====================================

var greetPerson = person.greet;

greetPerson()

var reallyGreetPerson = person.greet.bind(person);
reallyGreetPerson();

person.greet.bind(person)();
person.greet.call(person);

// ====================================

var newPerson = {
    firstName: 'Jordan',
    lastName: 'Hayashi',
    greet: () => console.log('Hi, ' + this.firstName)
};

newPerson.greet();
newPerson.greet.call(person);