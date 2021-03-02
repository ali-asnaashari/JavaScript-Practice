/** section1 - intro **/
// Objects are collections of key-value pair
// if you are properties that are highly related , we want to encapsulate them inside of an object.

// EXP
// Object-Oriented Programming (OOP)
const circle = {
    radius: 1,
    // object
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // Method
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

/** section2 - Factory Functions **/

// Factory Functions ---> to create simply object

// in Factory Functions we use Camel Notation Like oneTwoThreeFour

// In modern JS, if our key and value are the same ,
// we can make our code shorter by removing value
// and simply adding the key

function createCircle(radius){
    return {
        // radius <-----> radius = radius
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());

/** section3 - Constructor Functions **/

/** Note:
 * Learning another Pattern to Create Function
 * in Constructor Functions we use Pascal Notation Like OneTwoThreeFour
 * this ----> Reference to the object
 */

function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
    return this;
}

const circle2 = new Circle(1);


/** section4 - Dynamic Nature of Objects **/

// object are Dynamic Which means once you create them
// you can always add new properties or methods,
// or removing Existing Ones

// we can use the delete operator, to delete a member from a square object. That member can be a property or method.

// what kind of constant is that? Well, when we use constant here, that means
// we cannot reassign this constant, Like square = {}

const square = {
    radius: 1
};

square.color = 'blue';
square.draw = function (){}

delete square.color;
delete square.draw();

console.log(square);

/** section5 - Constructor Property */

// every object has a constructor property and that references a function that was used to create that object.

// Circle1 define in section2 - Factory Functions
console.log(circle1.constructor);
// Circle2 define in section3 - Constructor Functions
console.log(circle2.constructor);

/** section6 - Functions Are Objects */

// In JS , Functions Are Objects

function CircleV2(radius){
    this.radius = radius
    this.draw = function (){
        console.log('DrawV2')
    }
}

console.log(CircleV2.name)

// Return Number of Argument
console.log(CircleV2.length)

// Constructor Property
console.log(CircleV2.constructor)

// call Method
// {} target of this
console.log(CircleV2.call({},1)) // const another = new CircleV2(1);

// apply Method
// Exactly Like call Method but instead of passing all the arguments Explicitly We Pass them in array.
console.log(CircleV2.apply({},[1,2,3]))

























