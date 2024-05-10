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
/*
[Arithmetic Operators: Used for basic arithmetic operations like addition, subtraction, multiplication, division, and modulus]
[Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%), Increment (++) and Decrement (--)]
*/
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
// [Comparison Operators: Used to compare values and return a Boolean result]
// [Equal to (==), Not equal to (!=), Strict equal to (===), Strict not equal to (!==), Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=)]
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
// [Logical Operators: Used to combine or manipulate Boolean values]
// [Logical AND (&&), Logical OR (||), Logical NOT (!)]
function logical_operator() {
    let x = 3;
    // logical AND
    console.log((x < 5) && (x > 0));  // true
    console.log((x < 5) && (x > 6));  // false
    // logical OR
    console.log((x > 2) || (x > 5));  // true
    console.log((x > 3) || (x < 0));  // false
    // logical NOT
    console.log(!(x == 3));  // false
    console.log(!(x < 2));  // true
}
// logical_operator();

/* -------------------------------------------------------------------------- */
// [Bitwise Operators: Used to perform bitwise operations on binary representations of numbers]
// [Bitwise AND (&), Bitwise OR (|), Bitwise XOR (^), Bitwise NOT (~), Left Shift (<<), Right Shift (>>), Zero-fill Right Shift (>>>)]

function bitwise_operator() {
    // [Bitwise AND (&): It returns a one in each bit position for which the corresponding bits of both operands are ones]
    let result1 = 5 & 3; // Result: 1 (binary: 101 & 011 = 001)
    // [Bitwise OR (|): It returns a one in each bit position for which the corresponding bits of either or both operands are ones]
    let result2 = 5 | 3; // Result: 7 (binary: 101 | 011 = 111)
    // [Bitwise XOR (^): It returns a one in each bit position for which the corresponding bits of either but not both operands are ones]
    let result3 = 5 ^ 3; // Result: 6 (binary: 101 ^ 011 = 110)
    // [Bitwise NOT (~): It inverts the bits of its operand]
    let result4 = ~5; // Result: -6 (binary: ~101 = 11111111111111111111111111111010)
    // [Left Shift (<<): It shifts the bits of its first operand to the left by the number of positions specified in the second operand]
    let result5 = 5 << 1; // Result: 10 (binary: 101 << 1 = 1010)
    // [Sign-propagating Right Shift (>>): It shifts the bits of its first operand to the right by the number of positions specified in the second operand]
    let result6 = 5 >> 1; // Result: 2 (binary: 101 >> 1 = 10)
    // [Zero-fill Right Shift (>>>): It shifts the bits of its first operand to the right by the number of positions specified in the second operand. It always fills in the shifted positions with zeros]
    let result7 = -5 >>> 1; // Result: 2147483645 (binary: -101 >>> 1 = 11111111111111111111111111111101)

}
// bitwise_operator();

/* -------------------------------------------------------------------------- */
// [Unary Operators: Operators that only require a single operand]
// [Unary plus (+), Unary minus (-), Logical NOT (!)]
function unary_operator() {
    // [Unary plus (+): Converts its operand to a number]
    var num = +"5"; // num will be 5
    // [Unary minus (-): Negates its operand]
    var negNum = -5; // negNum will be -5
    // [Increment (++): Increments its operand by 1]
    var x = 5;
    x++; // x will be 6
    // [Decrement (--): Decrements its operand by 1]
    var y = 10;
    y--; // y will be 9
    // [Logical NOT (!): Converts its operand to a boolean value and negates it]
    var bool = true;
    var negatedBool = !bool; // negatedBool will be false
}
// unary_operator();

/* -------------------------------------------------------------------------- */
// [Ternary Operator (Conditional Operator): An operator that takes three operands and evaluates a Boolean expression, returning one of two values depending on whether the expression is true or false]
function ternary_operator() {
    var age = 20;
    var message = (age >= 18) ? "You are an adult" : "You are a minor";
    console.log(message); // Output: "You are an adult"
}
// ternary_operator();

/* -------------------------------------------------------------------------- */
// [Type Operators: Used to check the data type of a value]
// [typeof, instanceof]
function typeof_operator() {
    let age = 25;
    console.log(typeof age); // Output: "number"
    let name = "John";
    console.log(typeof name); // Output: "string"
    let isStudent = true;
    console.log(typeof isStudent); // Output: "boolean"
}
// typeof_operator();

// [We define a Car class. We create an instance of Car named myCar]
// [We use instanceof to check if myCar is an instance of Car, which returns true]
// [We also use instanceof to check if a number someValue is an instance of Number, which returns false because primitive values like numbers are not instances of their wrapper objects]
function instanceof_operator() {
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
    }
    let myCar = new Car("Toyota", "Corolla");
    console.log(myCar instanceof Car); // Output: true
    let someValue = 42;
    console.log(someValue instanceof Number); // Output: false
}
// instanceof_operator();

/* -------------------------------------------------------------------------- */
// [Comma Operator: Allows multiple expressions to be evaluated in a single statement, returning the value of the last expression]
function comma_operator() {
    var x = (1 + 2, 3 + 4);
    console.log(x); // Output: 7
    for (var i = 0, j = 10; i < j; i++, j--) {
        // Loop body
    }
}
// comma_operator();

/* --------------------------- OPERATOR PRECEDENCE -------------------------- */
// [operators have a defined order of precedence, which determines the sequence in which they are evaluated when expressions are parsed]
// [Here's a breakdown of the order of precedence in JavaScript, from highest to lowest]
// [Grouping: ( ) - Parentheses are used to group expressions and control the order of evaluation]
// [Member Access: . - Access properties or methods of objects]
// [Computed Member Access: [ ] - Access properties or methods of objects using a computed value]
// [Function Call: ( ) - Call functions or constructors and pass arguments]
// [Postfix Increment/Decrement: ++, -- - Increment or decrement a value after its current value has been used]
// [Logical NOT: ! - Negates a boolean value]
// [Unary Plus and Minus: +, - - Convert an operand into a number and positive/negative sign]
// [Exponentiation: ** - Raise a number to the power of another]
// [Multiplication, Division, Remainder: *, /, % - Perform multiplication, division, or find the remainder of division]
// [Addition and Subtraction: +, - - Perform addition or subtraction]
// [Relational Operators: <, <=, >, >=, instanceof, in - Compare values and determine the relationship between them]
// [Equality Operators: ==, !=, ===, !== - Compare values for equality or inequality]
// [Bitwise Shift Operators: <<, >>, >>> - Perform bitwise left shift, bitwise right shift, or unsigned right shift]
// [Bitwise AND: & - Perform a bitwise AND operation]
// [Bitwise XOR: ^ - Perform a bitwise XOR operation]
// [Bitwise OR: | - Perform a bitwise OR operation]
// [Logical AND: && - Perform a logical AND operation]
// [Logical OR: || - Perform a logical OR operation]
// [Conditional (Ternary) Operator: ? : - Evaluate a condition and return one of two values based on the result]
// [Assignment Operators: =, +=, -=, *=, /=, etc. - Assign values to variables or properties]

/* ----------------------- STRING VS TEMPLATE LITERAL ----------------------- */
// [strings and template literals are both used to represent text data, but they have some differences in syntax and functionality]

/* -------------------------------------------------------------------------- */
// [Strings in JavaScript are sequences of characters enclosed in single quotes (') or double quotes (")]
// [They are immutable, meaning once created, their value cannot be changed]
// [To include variables or expressions within a string, you need to concatenate them using the + operator or use string interpolation functions like String.prototype.concat() or String.prototype.slice()]
function string_example() {
    const name = 'Alice';
    const greeting = 'Hello, ' + name + '!'; // Using concatenation
}
// string_example();

/* -------------------------------------------------------------------------- */
// [Template literals were introduced in ECMAScript 6 (ES6). They are enclosed in backticks (``)]
// [Template literals support string interpolation, allowing you to embed expressions or variables directly within the string using ${} syntax]
// [They support multi-line strings without the need for escape characters like \n]
// [NOTES: Template literals offer a more concise and readable way to create strings with variable interpolation and multiline support, making them often preferred over traditional string concatenation, especially in modern JavaScript code. However, for compatibility with older browsers or environments, traditional strings may still be used.]
function string_literal_example() {
    const name = 'Alice';
    const greeting = `Hello, ${name}!`; // Using template literals
    const multiLine = `
    This is a
    multi-line
    string.
    `;
    const x = 10;
    const y = 20;
    const sum = `The sum of ${x} and ${y} is ${x + y}.`;
}
// string_literal_example();

/* ------------------------- CONDITIONAL STATEMENTS ------------------------- */
// [In JavaScript, there are several types of conditional statements used to execute different blocks of code based on specified conditions]

/* -------------------------------------------------------------------------- */
// [The if statement executes a block of code if a specified condition is true]
function if_example() {
    let x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    }
}
// if_example();

/* -------------------------------------------------------------------------- */
// [The if...else statement executes one block of code if a specified condition is true and another block of code if the condition is false]
function if_else_example() {
    let age = 17;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}
// if_else_example();

/* -------------------------------------------------------------------------- */
// [The if...else if...else statement allows you to chain multiple conditions together]
function if_else_if_example() {
    let num = 0;
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}
// if_else_if_example();

/* -------------------------------------------------------------------------- */
// [The switch statement evaluates an expression, matches the expression's value to a case clause, and executes the block of code associated with that case]
function switch_example() {
    let day = "Monday";
    switch (day) {
        case "Monday":
            console.log("It's Monday.");
            break;
        case "Tuesday":
            console.log("It's Tuesday.");
            break;
        default:
            console.log("It's another day of the week.");
    }
}
// switch_example();

/* -------------------------------------------------------------------------- */
// [The ternary operator condition ? expression1 : expression2 evaluates a condition and returns one of two expressions based on whether the condition is true or false]
function ternary_example() {
    let age = 20;
    let status = (age >= 18) ? "adult" : "minor";
    console.log(`You are an ${status}.`);
}
// ternary_example();

/* -------------------- TYPE CONVERSION VS TYPE COERCION -------------------- */
// [In JavaScript, both type conversion and type coercion are mechanisms used to convert values from one data type to another, but they operate differently

/* -------------------------------------------------------------------------- */
// [Type conversion in JavaScript involves explicitly converting a value from one data type to another using built-in functions or methods]
// [It occurs when a developer intentionally changes the data type of a value]
// [Type conversion typically results in a new value of the desired data type]
// [Examples of type conversion include using functions like Number(), String(), Boolean(), or methods like parseInt() and parseFloat()]

function type_conversion() {
    let x = "10"; // x is a string
    let y = Number(x); // Explicitly convert x to a number
    console.log(typeof y); // Output: number
}
// type_conversion();

/* -------------------------------------------------------------------------- */
// [Type coercion in JavaScript is an implicit process where values are automatically converted from one data type to another during operations]
// [It occurs when JavaScript automatically converts the data type of a value to perform an operation]
// [Type coercion can sometimes lead to unexpected results if the developer is not aware of how JavaScript handles different data types]
// [Examples of type coercion include when using operators like +, -, ==, ===, !, etc]
function type_coercion() {
    let x = "10"; // x is a string
    let y = x + 5; // JavaScript coerces 5 into a string and performs string concatenation
    console.log(y); // Output: "105"
}
type_coercion();

