/** section1 - If/else */

let hour = 20;

if(hour >=6 && hour < 12){
    console.log("Good Morning");
}
else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}

/** Section2 - Switch/case */

let role = 'guest'

switch (role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

/** Section3 - For */

/**
 * For
 * While
 * Do -- while
 * For -- in
 * For -- of

 */

for (let i = 1 ; i<=5 ; i++){
    if (i % 2 !== 0) console.log(i)
}

/** Section4 - While */

let i = 0;
while(i <= 5){
    if (i % 2 !== 0) console.log(i);
    i++;
}

/** Section5 - Do-While */

let j = 0;
do {
    if (j % 2 !== 0) console.log(j);
    j++;

}while(j <= 5);

/** Section6 - For-in */

// we use for-in loop to iterate over the properties of an object
const person = {
    name: 'ALi',
    age: 30
};
for (let key in person)
    console.log(key,person[key]);

const colors = ['red','green','blue'];
for (let index in colors)
    console.log(index,colors[index]);

/** section7 - For-of */

// we use for-of loop to iterate over the elements or items in the array
const things = ['spoon','fork','knife']
for (let thing of things)
    console.log(thing);




