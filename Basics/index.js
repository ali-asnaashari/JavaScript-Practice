/** ---------------------------------- section1 My First Js Code ----------------------------------- **/
console.log("Hello world");

/** ---------------------------------- section2 Variables ----------------------------------------- **/

/**
 - Previously , in the old days , before ES6 , we use the var keyword to declare variable.
 - now use the let keyword.
 - by default variable in js their value is undefined.
 -
 **/

/** part1 **/
let name;
console.log(name);

/** part2 **/
let name1 = 'ali';
console.log(name1);

/** Rules
 1. can not be a reserved key word
 2. should be meaningful
 3. can not start with number exp:1name
 4. can not contain space or hyohen(-)
 5. use camel notation
 6. are case-sensitive
 */

/** ---------------------------------- section3 Constant ----------------------------------------- **/

// value of constant can not change

const interestRate = 0.3;
// interestRate = 1; // Error ---> can not Reassign
console.log(interestRate);

/** ---------------------------------- section4 Primitive Type -------------------------------------- **/

// value of constant can not change
/**
 - Primitive/Value Types include:
 - String
 - Number
 - Boolean
 - undefined
 - null
 */

/** Example **/

let name = 'ali';             // String literal
let age = 30;                // Number literal
let isApproved = false;     //  Boolean literal
let firstName = undefined;
let selectedColor = null; // null --> clear the value of variable


/** ---------------------------------- section5  Dynamic Typ ---------------------------------------- **/

// in js unlike other programming languages
// we dont have two kind of numbers , we dont have floating number and integer
// all numbers are type number

let name = 'ali'
console.log(typeof name); // string
name = 1;
console.log(typeof name); // number

let selectedColor = null;
console.log(typeof selectedColor); // object

/** ---------------------------------- section6 Reference Type And Object ------------------------------------- **/

/**
 * Reference Type include:
 * Object
 * Array
 * Function
 */

/**
 let name = 'ali';
 let age = 30;
 **/

// instead of above can use:
let person = {
    name: 'ali',
    age: 30
};

console.log(person);
console.log(person.name);
console.log(person.age);

person.name = 'john';
console.log(person.name);

person['name'] = 'sina';
console.log(person.name);

let selection = 'name';
person[selection] = 'ahmad';
console.log(person.name);


/** ---------------------------------- section7 Array -------------------------------------------- **/

// Array is Data Structure that we use to represent a list of items.

let selectedColor = ['red','blue'];
console.log(selectedColor);
// Access to the Element
console.log(selectedColor[0]);

// Element and size of array is Dynamic:
selectedColor[2] = 'green';
selectedColor[3] = 1;
console.log(selectedColor[2]);

// Array is an Object in js
console.log(typeof selectedColor);

// length Property
console.log(selectedColor)
console.log(selectedColor.length);

/** ---------------------------------- section8 Function -------------------------------------------- **/

// EXP 1
function greet(){
    console.log('hello world');
}
greet();

// EXP 2 ---> passing parameter
function greetV1(name){
    console.log('hello ' + name);
}
greetV1('ali');

// EXP 3 ---> passing multiple parameter
function greetV2(name,lastName){
    console.log('hello ' + name + ' ' + lastName);
}

greetV2('john','smith');
greetV2('ali'); // second value is undefined


/** ---------------------------------- section9 Types of Functions -------------------------------------------- **/

// Performing a task
function greetV3(){
    console.log('hello world');
}
greetV3();

// Calculation a value
function square(number){
    return number*number;
}
console.log(square(2));