/* Hoisting in Javascript is a behaviour in which a function or a variable
can be used before delclarition. for example

function definition are hoisted but not variable initilization

*/

// using test before declaring 

// console.log (test) // undefined
// var test;
// using test before declaring 

// var test;
// console.log (test);  // undefined


/* Variable hosting
in terms of variable and constants, keywords var is hoisted .
let and const does not allow hoisting.


*/

// program to desplay value
/*
a = 5;
console.log (a);
var a; // 5


// program to display a value

var a = 4;

function greet(){
    b = 'hello';// we are not declare b and we use it this is called hosting
    console.log(b);
    var b;
}

greet();
console.log(b);
*/

// Function HOisting

// A function can be called before declaring it , for example

// programm to pring the text

// greet();

// function greet(){
//     console.log ('Hi, there.')
// }

// output : Hi, there
// in the above program the function greet is called before declaring it and the program shows the output. this is due to hoisting.


//  However, when a fucntion is used as an expression, an error occurs because only declarition ar hoisted for ex:


greet();

let greet = function greet(){
    console.log ('Hi, there.')
}

