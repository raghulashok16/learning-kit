/* ---------------- JavaScript Program to Swap Two Variables ---------------- */
function swapVariablesTemp(value_1, value_2) {
    let temp = value_1;
    value_1 = value_2;
    value_2 = temp;
    console.log(value_1);
    console.log(value_2);
}
swapVariablesTemp(0, 1);

function swapVariables(value_1, value_2) {
    [value_2, value_1] = [value_1, value_2];
    console.log(value_1);
    console.log(value_2);
}
swapVariables(0, 1);

/* ------------ JavaScript Program to Convert Kilometers to Miles ----------- */
function convertMiles(kilometer_value) {
    console.log(kilometer_value * .621371);
}
convertMiles(120);

/* ----------- Javascript Program to Convert Celsius to Fahrenheit ---------- */
function convertFahrenheit(celsius_value) {
    console.log((celsius_value * 1.8) + 32);
}
convertFahrenheit(65);

/* ------------- Javascript Program to Generate a Random Number ------------- */
function randomNumber(min_value, max_value) {
    console.log(Math.floor(Math.random() * (max_value - min_value) + min_value));
}
randomNumber(5, 9);

/* - Javascript Program to Check if a number is Positive, Negative, or Zero - */
function checkNumber(value) {
    if (value === 0) {
        console.log("value is zero")
    } else if (value > 0) {
        console.log("value is positive")
    } else {
        console.log("value is negative")
    }
}
checkNumber(0);

/* --------- Javascript Program to Check if a Number is Odd or Even --------- */
function checkOddEven(value) {
    let temp = value % 2;
    if (temp === 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}
checkOddEven(12);

/* ------- JavaScript Program to Find the Largest Among Three Numbers ------- */
function largestNumber(input_array) {
    let temp = null;
    input_array.map((value) => {
        if (temp < value) temp = value;
    });
    console.log(temp);
}
largestNumber([1, 8, 555, 4, 10, 6, 9]);