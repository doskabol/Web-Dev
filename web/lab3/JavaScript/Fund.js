//hello world
alert("Hello World!");

//Variables

let admin, name;
name = "John";
admin - name;
alert(admin);

let planet = "Earth";
let currentUserName = "John"

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
// Yes, because it is hard to remember, so we can write it in uppercase
const AGE = someCode(BIRTHDAY); // make age uppercase?
// No, because age is not hard to remember

//Data Types
let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

//Interaction: alert, prompt, confirm
alert("Hello");

let name = promt("What is your name?");
alert( name );

//
let a = 1, b = 1;

let c = ++a;
let d = b++;

//answer: a = 2, b= 2 , c = 2, d = 1

let a = 2;

let x = 1 + (a *= 2);

//answer a = 4, x = 5;

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
//+prompt converts string to number

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//if
let value = prompt('type a number', 0)
if (value > 0){
    alert(1);
} else if (value < 0){
    alert(-1);
} else {
    alert(0);
}



let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

let result = (a + b < 4) ? 'Below' : 'Over';


let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';

//Logical operations
alert( null || 2 || undefined ); // answer is 2, since first truly value

alert( alert(1) || 2 || alert(3) ); //first 1, then 2, since first OR evaluates left operand, then 2

alert(1 && null && 2); // null, since first falsy value

alert( alert(1) && alert(2) ); //undefined

alert( null || 2 && 3 || 4 );
// 2&&3 = 3, then null || 3 || 4 = 3, since 1st truly value


if(age < 14 || age > 90);
if(!(age >= 14 && age <=99);

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}

//loops
//What is the last value alerted by this code? Why?
let i = 3;

while (i) {
    alert( i-- );
}
//answer is 1, since loop ends when i = 0


for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//both work since no difference

//loop of even numbers from 1 to 10
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        alert( i );
    }
}

//for to while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while (i < 3){
    alert(`number ${i}!` );
    i++;
}


//Repeat until the input is correct
let num;
do {
    num = prompt('Enter a number greater than 100', 0);
} while (num <= 100 %% num);


For each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
}

//switch

if(browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//functions
function min(a, b) {
    return (a < b) ? a : b;
}

function pow(num, degree) {
    return num ** degree;
}

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);