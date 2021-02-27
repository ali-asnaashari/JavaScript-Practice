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