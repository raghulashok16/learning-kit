// Bundle Up!
// Let's assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.

// Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

// calcBundledTemp(2, "10*C") ➞ "12.1*C"
// // 10 * 1.1 = 11
// // 11 * 1.1 = 12.1
// Examples
// calcBundledTemp(1, "2*C") ➞ "2.2*C"

// calcBundledTemp(4, "6*C") ➞ "8.8*C"

// calcBundledTemp(20, "4*C") ➞ "26.9*C"
// Notes
// The temperature will be given in Celsius and as a string.
// Note that the degrees sign is given as an asterisk.

function calcBundledTemp(n, temp) {
    let val = Number(temp.split('*')[0]);
    console.log(val);
    for (let i = 0; i < n; i++) {
        val = val * 1.1;
    }
    console.log(Math.round(val * 10) / 10);
}
// calcBundledTemp(4, "6*C");
/* -------------------------------------------------------------------------- */

// Shhh Be Quiet Function
// Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

// Examples
// shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

// shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

// shhh("") ➞ '"", whispered Edabit.'
// Notes
// Don't forget to surround the original string with double quotation marks "".

function shhh(sentence) {
    let sclicedSentence = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
    const attachmentSentence = "whispered Edabit."
    console.log(`"${sclicedSentence}", ${attachmentSentence}`);
}
// shhh("HI THERE!");
/* -------------------------------------------------------------------------- */

// Wash Your Hands :)
// It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.

// Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.

// Examples
// washHands(8, 7) ➞ "588 minutes and 0 seconds"

// washHands(0, 0) ➞ "0 minutes and 0 seconds"

// washHands(7, 9) ➞ "661 minutes and 30 seconds"
// Notes
// Consider a month has 30 days.
// Wash your hands.

function washHands(N, nM) {
    let totalSeconds = N * 21 * 30 * nM;
    let temp = 0;
    console.log(totalSeconds);
    if (totalSeconds / 60 >= 1) {
        console.log(totalSeconds);
        temp = Math.floor(totalSeconds / 60);
        totalSeconds %= 60;
        console.log(temp, totalSeconds);
    }
}
// washHands(1, 1);
/* -------------------------------------------------------------------------- */

// Good Match?
// In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).

// If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

// Examples
// isGoodMatch([1, 2, 4, 7]) ➞ [1+2, 4+7] ➞ [3, 11]

// isGoodMatch([5, 7, 9, -1, 4, 2]) ➞ [12, 8, 6]

// isGoodMatch([5, 7, 9, -1, 4, 2, 3]) ➞ "bad match"

// isGoodMatch([2, 6, 7, -2, 4]) ➞ "bad match"

function isGoodMatch(arr) {
    if (arr.length % 2 !== 0) {
        console.log("bad match")
    } else {

        let tempArr = [];
        for (let i = 0; i < arr.length; i += 2) {
            let val = arr[i] + arr[i + 1];
            tempArr.push(val);
        }
        console.log(tempArr);
    }
}
// isGoodMatch([2, 6, 7, -2]);
/* -------------------------------------------------------------------------- */

// Function to Arrow Function
// Create a function that takes an empty function as a string and returns the function as a arrow function.

// Examples
// "function test(a) {}" ➞  "const test = (a) =>"

// "function twoArgs(a,b) {}" ➞ "const twoArgs = (a,b) =>"

// "function restArgs(...a) {}" ➞  "const restArgs = (...a) =>"
// Notes
// Functions can have multiple arguments.
// The arrow function must be assigned to a const.

function toArrow(f) {
    let arr = f.slice(9).slice().slice(0, -3).split("(");

    console.log(`const ${arr[0]} = (${arr[1]} => {}`)
}
// toArrow("function restArgs(...a) {}")
/* -------------------------------------------------------------------------- */

// Reverse Coding Challenge #6
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples
// mysteryFunc(152) ➞ 10

// mysteryFunc(832) ➞ 48

// mysteryFunc(19) ➞ 9

// mysteryFunc(133) ➞ 9

function mysteryFunc(num) {
    let temp = num.toString().split('');
    let val = 1;
    for (let i = 0; i < temp.length; i++) {
        val = val * temp[i];
    }
    console.log(val)
}
// mysteryFunc(152);
/* -------------------------------------------------------------------------- */

// Book Shelf
// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// The name of the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

// Examples
// HP.title ➞ "Harry Potter"
// HP.author ➞ "J.K. Rowling"
// HP.getTitle() ➞ "Title: Harry Potter"
// HP.getAuthor() ➞ "Author: J.K. Rowling"
// Notes
// Read more about constructor functions in Resources.
// Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.

function Book(title, author) {
    // Write your properties and methods here
}

// Instantiate your Book constructor here
/* -------------------------------------------------------------------------- */

// Coaxial Cable Impedance
// Create a function that takes the values Dd (Dielectric Outer Diameter), Dc (Inner Conductor Diameter) and er (Dielectric Constant) and calculates the Coaxial Cable Impedance.

// Examples
// impedanceCalculator(20.7, 2, 4) ➞ 70.0

// impedanceCalculator(5.3, 1.2, 2.2) ➞ 60.0

// impedanceCalculator(4.48, 1.33, 2.2) ➞ 50.0
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// Round your result to one decimal place.

function impedanceCalculator(Dd, Dc, er) {
    console.log(Math.round(138 * Math.log10(Dd / Dc) / Math.sqrt(er)));
}
// impedanceCalculator(20.7, 2, 4);
/* -------------------------------------------------------------------------- */

// Expensive Orders
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }

// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }

// expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}

function expensiveOrders(orders, cost) {
    const entries = Object.entries(orders);
    let obj = {};
    for (let [name, price] of entries) {
        if (price > cost) {
            obj[`${name}`] = price;
        }
    }
    console.log(obj);
}
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000);
/* -------------------------------------------------------------------------- */

// Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// Examples
// isScalable([1, 2, 4, 6, 7, 8]) ➞ true

// isScalable([40, 45, 50, 45, 47, 52]) ➞ true

// isScalable([2, 9, 11, 10, 18, 21]) ➞ false
// Notes
// The array may start at any number and can be any length.

function isScalable(arr) {
    let val = true;
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i] - arr[i - 1] <= 5 || arr[i] - arr[i - 1] <= -5)) {
            val = false;
        }
    }
    console.log(val);
}
isScalable([40, 45, 50, 45, 47, 52]);