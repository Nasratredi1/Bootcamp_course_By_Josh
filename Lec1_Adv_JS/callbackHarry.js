/*
A callback is a function that is executed after another function has finished executing.
As we have studied earlier that functions are objects. 
Functions can take functions as arguments and can be returned by other functions.
Functions that take another function as an argument are called higher-order functions
So, the callback function can also be defined as any function that is passed as an argument is called a callback function.

Why do we need Callbacks?
As we know, instead of waiting for a response, JavaScript will keep executing while listening for other events. Here is an example:

function fun1(){
   console.log(“Code With Harry”);
 }
function fun2(){
   console.log(“JavaScript Tutorial”);
 }
first();
second();
The function fun1 is executed first, and the function fun2 is executed second.
 JavaScript runs code from top to bottom. 

 Callbacks are used to make sure that a function is not going to execute 
 before a task is completed but will execute right after the task has completed. 
 It helps us develop asynchronous JavaScript code and keeps us safe from future errors


 In JavaScript, the way to create a callback function is to pass it
  as a parameter to another function, and then to call it back right after something has happened or some task is completed.

  How to create a Callback:-
Suppose we want to log a message to the console but it should be there after 5 seconds.

function myMessage (str) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Code With Harry`);
    }, 5000);
}
There is a built-in method called “setTimeout”, which calls a function after a given 
period of time. So here, the myMessage function is being called after 5 seconds. 
(1 second = 1000 milliseconds). In other words, the myMessage function is being called after 
something happened (after 5 seconds passed for this example), but not before. 
So, the myMessage function is an example of a callback function.


Here is an example of callback functions in JavaScript:

function addition(x, y , callback){
setTimeout(() => {
document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
callback(); 
 }, 5000); } 
 // display() function is called just after the ending of addition() function
function display(){ 
document.write('Numbers added!'); 
 } 
 // Calling addition() function
addition(5,5,display);
Here are the two functions – addition(x, y, callback) and display(). 
Here addition() is called after 5 seconds with the display() function,
 i.e. passed in as the third argument to the addition function along with two numbers x and y.
  As a result, the addition() is invoked with 1, 2 and the display() which is the callback. 
  The addition() prints the addition of the two numbers(x+y), and as soon as that is done, 
  the callback function is executed.
*/

console.log("this is tutorial of callbacks")

// pretend that this response is coming from the server.

const students = [
    {name:"Nasrat", subject: "Javascript"},
    {name:"Redi", subject: "ML"}
    
]

function enrollStudent (student,callback){ // you can give any name to that takes two args
    setTimeout(function(){
        students.push(student)
        console.log("student has been enrolled");
        callback();  // likes get students
    }, 1000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("student have been fetched");

    },5000);
}

let newStudent = {name: "wahdat", subject: "English"}
enrollStudent(newStudent,getStudents);

// getStudents()