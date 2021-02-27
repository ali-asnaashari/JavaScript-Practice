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