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
const cricle1 = createCircle(1);
console.log(cricle1);
console.log(cricle1.draw());
