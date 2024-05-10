/* ------------------------------- DATA TYPES ------------------------------- */
// [7 different data types in javascript]
// [Number - floating point numbers - used for decimals and integers]
// [String - sequence of character - used for text]
// [Boolean - logical type that can be true or false - used for taking decisions]
// [Undefined - value taken by a variable that is not defined - empty value]
// [Null - also means empty value]
// [Symbol (ES2015) - values that is unique and cannot be changed - not usefull for now]
// [BigInt (ES2020) - larger integers than Number type can hold]
// [javascript has dynamic typing]
// [we do not have to manually define the data type of the value stored in a variable]
// [instead datatypes are defined automatically]
function datatypes() {
    console.log(typeof ('javascript'));
    console.log(typeof ('A'));
    console.log(typeof (true));
    console.log(typeof (false));
    console.log(typeof (12));
    console.log(typeof (1.2));
    let value_1;
    // [undefined means a variable has been declared but has not yet been assigned a value]
    console.log(typeof (value_1));
    let value_2 = null;
    // [null is an assignment value, meaning that a variable has been declared and given the value of null]
    console.log(typeof (value_2));
    console.log(typeof (null));
    // [typeof null is object and it is not corrected for leagacy reasons]
};
// datatypes();

/* ------------------------------ LET-CONST-VAR ----------------------------- */
// [The let and const keyword was introduced in the later version of JavaScript known as ES6(ES2015)]
// [And it's the preferred way to declare variables]
// [let - block-scoped. let does not allow to redeclare variables. Hoisting does not occur in let]
// [var - function scoped. var allows to redeclare variables. Hoisting occurs in var]

/* -------------------------------------------------------------------------- */
// [The let keyword creates block-scoped variables, which means they are only accessible within a particular block of code]
function let_declarations() {
    {
        // block of code
        // declare variable with let
        let name = "Peter";
        // can be accessed here
        console.log(name); // Peter
    }
    // can't be accessed here
    console.log(name);
};
// let_declarations();

/* -------------------------------------------------------------------------- */
// [The const keyword creates constant variables that cannot be changed after declaration]
function const_declarations() {
    // declare variable with const
    const fruit = "Apple";
    console.log(fruit);
    // reassign fruit
    // this code causes an error
    fruit = "Banana";
    console.log(fruit);
}
// const_declarations();

/* -------------------------------------------------------------------------- */
// [The variable declared inside a function with var can be used anywhere within a function]
// [In the above program, the variable a is declared with var]
// [The variable a can be used anywhere inside the function]
// variable a cannot be used here
function var_keyword() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
// variable a cannot be used here
// var_keyword(); // hello

/* -------------------------------------------------------------------------- */
// [The variable declared with let can only be accessed inside a block of code]
// variable a cannot be used here
function let_keyword() {
    let a = 'hello';
    // variable b cannot be used here
    if (a == 'hello') {
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }
    // variable b cannot be used here
    console.log(a + ' ' + b); // error
};
// variable a cannot be used here
// let_keyword();


/* ----------------------------- VARIABLE SCOPE ----------------------------- */
// [the scope of a variable determines where it can be accessed within the code]
// [Global Scope, Local (Function) Scope, Block-Level Scope]

/* -------------------------------------------------------------------------- */
// [When variables are declared inside a function, they have a local scope and are accessible only within that function]
// [Here, the message variable is local to the function]
// [So, it can only be accessed within that function]
// [That's why we get an error when we try to access it outside the function]
// [To fix this issue, we can make the message variable global]
function local_scope() {
    // local variable
    var message = "Hello";
    console.log(`Local: ${message}`);
}
// try to access message variable
// outside the function
// console.log(`Global: ${message}`);
// local_scope();

/* -------------------------------------------------------------------------- */
// [a variable declared outside any function or in the global scope is known as a global variable]
// [A global variable can be accessed both inside and outside of functions]
// [Here, we can access the message variable from outside of the function]
// [This is possible because we have created the message variable in the global scope (outside the function)]
// [Thus, message will be accessible from any scope (region) of the program]
// declare global variable
var message = "Hello";
function global_scope() {
    console.log(`Local: ${message}`);
}
// console.log(`Global: ${message}`);
// global_scope();

/* -------------------------------------------------------------------------- */
// [JavaScript ES6 introduced block-level scoping with the let and const keywords]
// [Block-level variables are accessible only within the block {} they are defined in, which can be smaller than a function's scope]
// [In this example, we have created two separate message variables]
// [Block-Level: The variable inside the if block (visible only there)]
// [Local-Level: The variable inside the  function]
function block_level_scope() {
    // declare variable in local scope
    let message = "local";
    if (true) {
        // declare block-level variable
        let message = "block-level";
        console.log(`inner scope: ${message}`);
    }
    console.log(`outer scope: ${message}`);
}
// block_level_scope();

/* -------------------------- JAVASCRIPT OPERATORS -------------------------- */
// [JavaScript operators are special symbols that perform operations on one or more operands (values)]
// [an operator is a symbol or keyword that performs an operation on one or more operands, producing a result]

/* -------------------------------------------------------------------------- */
// [Arithmetic Operators: Used for basic arithmetic operations like addition, subtraction, multiplication, division, and modulus]
// [Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%), Increment (++) and Decrement (--)]
function arithmetic_operator() {
    let x = 5;
    // addition operator
    console.log('Addition: x + 3 = ', x + 3);
    // subtraction operator
    console.log("Subtraction: x - 3 =", x - 3);
    // multiplication operator
    console.log("Multiplication: x * 3 =", x * 3);
    // division operator
    console.log("Division: x / 3 =", x / 3);
    // remainder operator
    console.log("Remainder: x % 3 =", x % 3);
    // increment operator
    console.log("Increment: ++x =", ++x);
    // decrement operator
    console.log("Decrement: --x =", --x);
    // exponentiation operator
    console.log("Exponentiation: x ** 3 =", x ** 3);
}
// arithmetic_operator();

/* -------------------------------------------------------------------------- */
// [Assignment Operators: Used to assign values to variables]
// [Assignment (=), Compound Assignment (e.g., +=, -=, *=, /=, %=)]
function assignment_operators() {
    // assignment operator
    let a = 7;
    console.log("Assignment: a = 7, a =", a);
    // addition assignment operator
    a += 5;  // a = a + 5
    console.log("Addition Assignment: a += 5, a =", a);
    // subtraction assignment operator
    a -= 5;  // a = a - 5
    console.log("Subtraction Assignment: a -= 5, a =", a);
    // multiplication assignment operator
    a *= 2;  // a = a * 2
    console.log("Multiplication Assignment: a *= 2, a =", a);
    // division assignment operator
    a /= 2;  // a = a / 2
    console.log("Division Assignment: a /= 2, a =", a);
    // remainder assignment operator
    a %= 2;  // a = a % 2
    console.log("Remainder Assignment: a %= 2, a =", a);
    // exponentiation assignment operator
    a **= 2;  // a = a**2
    console.log("Exponentiation Assignment: a **= 7, a =", a);
}
// assignment_operators();

/* -------------------------------------------------------------------------- */
function comparision_operator() {
    // equal to operator
    console.log("Equal to: 2 == 2 is", 2 == 2);
    // not equal operator
    console.log("Not equal to: 3 != 3 is", 3 != 3);
    // strictly equal to operator
    console.log("Strictly equal to: 2 === '2' is", 2 === '2');
    // strictly not equal to operator
    console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');
    // greater than operator
    console.log("Greater than: 3 > 3 is", 3 > 3);
    // less than operator
    console.log("Less than: 2 > 2 is", 2 > 2);
    // greater than or equal to operator
    console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);
    // less than or equal to operator
    console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);
}
// comparision_operator();
/* -------------------------------------------------------------------------- */