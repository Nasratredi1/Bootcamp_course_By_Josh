var int1 = 42;
var int2 = int1;

int2 = 50;

console.log('int1: ' + int1);
console.log('int2: ' + int2);


// we know that objects are immutable so we can't change it
// output : int1 = 42 and int2 = 50

var obj1 = {}
var obj2 = obj1;
obj2.test = 'test';

console.log(JSON.stringify(obj1));

// if we used an array instead of objects.

obj2.arr = [];

var x = obj2.arr;
x.push(1);

console.log(JSON.stringify(obj1));