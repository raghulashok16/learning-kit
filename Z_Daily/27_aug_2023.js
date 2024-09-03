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

//create a function that takes an array of numbers and returns the second largest number in the array
function secondLargestNumber(input_array) {
    let temp = null;
    let second_temp = null;
    input_array.map((value) => {
        if (temp < value) {
            second_temp = temp;
            temp = value;
        } else if (second_temp < value) {
            second_temp = value;
        }
    });
    console.log(second_temp);
}
secondLargestNumber([1, 8, 555, 4, 10, 6, 9]);

//create a function that returns the reversed string with splitted words
function reverseString(input_string) {
    console.log(input_string.split("").reverse().join(""));
}
reverseString("hello world");

// create a function that adds a array values using recursion
function sumArray(input_array) {
    let temp = 0;
    input_array.map((value) => {
        temp = temp + value;
    });
    console.log(temp);
}
sumArray([1, 8, 555, 4, 10, 6, 9]);

// Returns true if the given number is an Armstrong number, false otherwise
function isArmstrongNumber(number) {
    let sum = 0;
    let num = number;
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, 3);
        num = Math.floor(num / 10);
    }
    return sum === number;
}

findArmstrongNumber(153);