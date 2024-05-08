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

datatypes();
function datatypes() {
    console.log(typeof ('javascript'));
    console.log(typeof ('A'));
    console.log(typeof (true));
    console.log(typeof (false));
    console.log(typeof (12));
    console.log(typeof (1.2));
    let value_1;
    console.log(typeof (value_1));
    let value_2 = null;
    console.log(typeof (value_2));
    console.log(typeof (null));
    // [typeof null is object and it is not correct for leagacy reasons]
}

