/* lexical Envirnment or variable envirnment. this topic come when we talk about
execution contex, or execution envirnment that's altimetley called scope. 
the scope where a variabl is available in you code
* Determines how variable names are resolved, especially with nested fucntion
  * child function contains the scope of the parent function
   even if the parent has returned.
*/

// function within function

var x = 50; 

function test(){
    var x = 42;
    function printx(){
        console.log(x);
    }
    console.log('value of x '+ x);
}

// Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.