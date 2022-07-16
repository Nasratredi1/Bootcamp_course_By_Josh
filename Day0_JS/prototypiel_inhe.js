/* Prototypal inheritance  (https://javascript.info/prototype-inheritance)
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods,
 and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

 prototype:?
 we know that object has hidden property [[prototype]] as named in the specification that is 
 either null or reference another object. the object is called a prototype.

 when we read a property from an object , it it's missing then js automatically takes it from the prototype
 in programming it's called prototypal inheritance.
 */
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

// // we can find both properties in rabbit not.
// console.log (rabbit.eats);
// console.log (rabbit.jumps);

// alert (rabbit.eats); // true
// alert (rabbit.jumps); // true

/* Here we can say that "animal" is the prototype of rabbit "or" rabbit proptypically inherits from animal".
so if animal has a lot of useful properties and methods, then they become automatically available in rabbit
such propeteties are called "inherited"

*/
/*
let user = {
    name: "John",
    surname: "Smith",

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);// John smith

// setter triggers!
admin.fullName = "Alice Cooper"

console.log(admin.fullName);// Alice cooper, state of adming modified
console.log(user.fullName);// John smith, state of user protected
*/


//The value of this
/*
let animal = {
    walk() {
        if (!this.isSleeping){
            console.log (`I walk`)
        }
    },
    sleep(){
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "white Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log (rabbit.isSleeping);// true
console.log (animal.isSleeping);// undefined (no such property in the prototype)

*/

//for... in loop
/* 
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// object.keys only returns owns keys
console.log(Object.keys(rabbit));

// for .. in loops ever both own and inherited keys.

for (let prop in rabbit){
    console.log(prop); // jumps then eats
}

// and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for (let prop in rabbit){
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn){
        console.log(`our: ${prop}`); // our: jumps
    }else {
        console.log(`Inherited: ${prop}`); // Inherited: eats.
    }
}





Summary
* In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
* We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
* The object referenced by [[Prototype]] is called a “prototype”.
* If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
* Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
* If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
* The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

*/

