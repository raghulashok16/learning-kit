/* ------------------------------- DATA TYPES ------------------------------- */
datatypes();
// [7 different data types in javascript]
// [Number - floating point numbers - used for decimals and integers]
// [String - sequence of character - used for text]
// [Boolean - logical type that can be true or false - used for taking decisions]
// [Undefined - value taken by a variable that is not defined - empty value]
// [Null - also means empty value]
// [Symbol (ES2015) - values that is unique and cannot be changed - not usefull for now]
// [BigInt (ES2020) - larger integers than Number type can hold]
// [javascript has dynamic typing - we do not have to manually define the data type of the value stored in a variable, instead datatypes are defined automatically]
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

/* ------------------------------ CONST-LET-VAR ----------------------------- */
scope();
// [var - functional or global scope. It can be updated and re-declared in the same scope. It can be declared without initialization. It can be accessed without initialization as its default value is “undefined”. These variables are hoisted.]
// [let - block scope. It can be updated but cannot be re-declared in the same scope. It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’. These variables are hoisted but stay in the temporal dead zone untill the initialization.]
// [const - block scope. It can neither be updated or re-declared in any scope.It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization. These variables are hoisted but stays in the temporal dead zone until the initialization.]
function scope() {
    let value_1 = 12;
    value_1 = 13;
    console.log(value_1);
    value_1 = 'google';
    console.log(value_1);
    value_1 = 14;
    console.log(value_1);
    const value_2 = 12;
    // value_2=13; [Assignment to constant variable: error name]
    var value_3 = 12;
    value_3 = 13;
    console.log(value_3);
}