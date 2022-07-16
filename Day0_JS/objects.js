var o = new Object();
// you can write 
// new Number();
// new Date();

o.firstName = "Nasrat";
o.lastName = "Redi";
o.isTeaching = true;
o.age = 22;
o.great = function(){
    console.log("Hello");
}

console.log(JSON.stringify(o));

//The JSON. stringify() method converts a JavaScript object or value to a JSON string,

// seconds way of creating an objects using litrals.
// this is called creating objects using key value pairs.

var o2 = {};
o2['firstName'] = 'Nasrat';
var a = 'lastName';
o2[a] = 'Redi';

// Third way of creating an objects.also using litrals

var o3 = {
    firstName: "Nasrat",
    lastName: "Redi",
    greet: function(){
        console.log('hi');
    },
    address: {
        street: "Jublie Town",
        number: '111'
    }

};

console.log(JSON.stringify(o3));


// you can run this code terminal by using below commond
//node filename.js
// you can cheack the code when you write node then you can write a code and cheack like in console

// prerequisite of this you must install node in your computer.

// difference between objects and json
//The last major difference between JSON and JavaScript objects is the way they are presented. JSON is presented in a string. 

/*
After 30 minutes 
Prototypical Inheritance. it's advance topic we just give a hint here
* Non-premitive types have a few properties/methods associated with them

    => Array.prototype.push()
    =>string.prototype.toUpperCase()

    * Each object stores a reference to its protopye
    * Prototype/methods defined most tightly to the instance have proiority.
    * Most primitive types have object wrappers.
     * string()
     * Number()
     * Boolean()
     * Object()
     * (Symbol())
     

    * Js will automatically "box"(wrap) primitive values so you have access to methods.

    42.toString()  // Errors
    var x = 42;

    x.toString()  // "42"
    x.__proto__ // [Number: 0] prototype of a number
    x instanceOf Number // false


    ****** Hosting means*******
    hosting means one a function dealared it's usable from anywhere withing your code
    so let's look couple of example of that


*/