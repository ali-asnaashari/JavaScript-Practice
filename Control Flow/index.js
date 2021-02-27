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