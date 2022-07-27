// var int1 = 42;
// var int2 = int1;

// int2 = 50;

// console.log('int1: ' + int1);
// console.log('int2: ' + int2);


// // we know that objects are immutable so we can't change it
// // output : int1 = 42 and int2 = 50

var obj1 = {}
var obj2 = obj1;
obj2.test = 'test';

console.log(JSON.stringify(obj1));

// if we used an array instead of objects.

obj2.arr = [];

var x = obj2.arr;
x.push(1);

console.log(JSON.stringify(obj1));

// so everything that's is not a premitive is called an objects.
// which ( include array,function, objects) any other prototype that you create they all stored by referenced.

// so don't think about pointer in javascript b/c they're not realy exist in javascript.
// only referencing objects.