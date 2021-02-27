/** Operator In JS **/

/**
 * Arithmetic
 * Assignment
 * Comparison
 * Logical
 * BitWise
 */


/** Arithmetic */

let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
// Exponentiation
console.log(num1 ** num2);

// Increment(++)
console.log(++num1);
console.log(num2++);
console.log(num2);

// Decrement(--)
console.log(--num2);
console.log(num1--);
console.log(num1);

/** Assignment */

let x = 3;

x = x + 1;
x += 5;
x *= 3;

/** Comparison */

let num3 = 1;

// Relational
console.log(num3 > 1);
console.log(num3 >= 1);
console.log(num3 < 1);
console.log(num3 <= 1);

// Equality
console.log(num3 === 1);
console.log(num3 !== 1);

/** Equality Operator */

// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

/** Ternary Operator */

let points = 110;
let value = points > 100 ? 'gold' : 'silver';
console.log('value:',value);

/** Logical Operator */

/**
 * AND ---> &&
 * OR  ---> ||
 * NOT ---> !
 */

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
let eligibleForLoanV1 = highIncome || goodCreditScore;
let eligibleForLoanV2 = !highIncome;

console.log('eligibleForLoan',eligibleForLoan);
console.log('eligibleForLoanV1',eligibleForLoanV1);
console.log('eligibleForLoanV2',eligibleForLoanV2);


/** Logical Operators With Non-Booleans */

/**
 * Falsy (false)
 * ''
 * false
 * null
 * undefined
 * 0
 * not a Number(NaN)
 */

// Anything that is not falsy ----> Truthy

console.log(false || 'ali');
console.log(false || 1);
console.log(false || 1 || 2);

let userColor = undefined;
let defaultcolor = 'blue'
let currentColor = userColor || defaultcolor;
console.log('currentColor:',currentColor);

let userColorV1 = 'red';
let defaultcolorV1 = 'blue'
let currentColorV1 = userColorV1 || defaultcolorV1;
console.log('currentColorV1:',currentColorV1);

/** BitWise Operator */

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
console.log(1 | 2);  // BitWise OR
console.log(1 & 2); //  BitWise AND