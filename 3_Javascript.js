/* ------------------------------- DATA TYPES ------------------------------- */
// [7 different data types in javascript]
// [Number - floating point numbers - used for decimals and integers]
// [String - sequence of character - used for text]
// [Boolean - logical type that can be true or false - used for taking decisions]
// [Undefined - value taken by a variable that is not defined - empty value]
// [Null - also means empty value]
// [Symbol (ES2015) - values that is unique and cannot be changed - not usefull for now]
// [BigInt (ES2020) - larger integers than Number type can hold]
// [javascript has dynamic typing - we do not have to manually define the data type of the value stored in a variable, instead datatypes are defined automatically]

// datatypes();
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

/* ------------------------------ LET-CONST-VAR ----------------------------- */
// [The let keyword creates block-scoped variables, which means they are only accessible within a particular block of code]

// let_declarations();
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

// [The const keyword creates constant variables that cannot be changed after declaration]

// const_declarations();
function const_declarations() {
    // declare variable with const
    const fruit = "Apple";
    console.log(fruit);
    // reassign fruit
    // this code causes an error
    fruit = "Banana";
    console.log(fruit);
}

// [The let and const keyword was introduced in the later version of JavaScript known as ES6(ES2015). And it's the preferred way to declare variables]
// [let - block-scoped. let does not allow to redeclare variables. Hoisting does not occur in let]
// [var - function scoped. var allows to redeclare variables. Hoisting occurs in var]


// [The variable declared inside a function with var can be used anywhere within a function]
// [In the above program, the variable a is declared with var. The variable a can be used anywhere inside the function greet]

// var_keyword(); // hello
// variable a cannot be used here
function var_keyword() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
// variable a cannot be used here


// [The variable declared with let can only be accessed inside a block of code]

// let_keyword();
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

/* ----------------------------- VARIABLE SCOPE ----------------------------- */
// [the scope of a variable determines where it can be accessed within the code]
// [Global Scope, Local (Function) Scope, Block-Level Scope]

// [When variables are declared inside a function, they have a local scope and are accessible only within that function]
// [Here, the message variable is local to the greet() function. So, it can only be accessed within that function. That's why we get an error when we try to access it outside the greet() function. To fix this issue, we can make the message variable global]

// local_scope();
function local_scope() {
    // local variable
    var message = "Hello";
    console.log(`Local: ${message}`);
}
// try to access message variable
// outside the greet() function
console.log(`Global: ${message}`);

// [a variable declared outside any function or in the global scope is known as a global variable]
// [A global variable can be accessed both inside and outside of functions]
// [Here, we can access the message variable from outside of the greet() function. This is possible because we have created the message variable in the global scope (outside the function). Thus, message will be accessible from any scope (region) of the program]

// global_scope();
// declare global variable
var message = "Hello";
function global_scope() {
    console.log(`Local: ${message}`);
}
// console.log(`Global: ${message}`);

