// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
// cardHide("1234123456785678") ➞ "************5678"

// cardHide("8754456321113213") ➞ "************3213"

// cardHide("35123413355523") ➞ "**********5523"
// Examples
// Ensure you return a string.
// The length of the string must remain the same as the input.

function cardHide(card) {
    const cut = card.slice(-4);
    let symb = '';
    let i = 0;
    while (i <= card.length - 5) {
        symb = symb + '*';
        i++;
    }
    console.log(symb + cut);
}
cardHide("8754456321113213");

// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function lessThanOrEqualToZero(num) {
    if (num < 0 || num === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

lessThanOrEqualToZero(-8);

/* -------------------------------------------------------------------------- */
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessThan100(a, b) {
    if ((a + b < 100)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

lessThan100(52, 5);
/* -------------------------------------------------------------------------- */

// Destructuring Assignment
// You can assign variables from arrays like this:

// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)

// console.log(first) ➞ outputs 1
// console.log(second) ➞ outputs 2
// console.log(third) ➞ outputs 3
// console.log(other) ➞ outputs [4, 5, 6, 7, 8]
// However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

// Examples
// first ➞ 1

// second ➞ 2

// third ➞ 3

// other ➞ [4, 5, 6, 7, 8]
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.

// Notes
// Your solution should be just One Line of code.

const [first, second, third, ...others] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(first)
console.log(second)
console.log(third)
console.log(others)

/* -------------------------------------------------------------------------- */
// Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// // What I want:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// // What I am getting:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]

// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
    return arr.filter(x => x.length >= 1);
}

console.log(removeEmptyArrays(["a", "b", [], [], [1, 2, 3]]))

/* -------------------------------------------------------------------------- */
// Just Another Sum Problem But... 😰😱
// Ok, the challenge is kind of easy, right?

// The problem is not adding. The problem is that the numbers are not in order. Create a function that organizes the numbers and adds the numbers in the range between X and Y.

// Here is an example:

// X = -10 | Y=1
// So this will be the range of numbers:

// -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1
// This will be your result:

// -54
// Remember, X and Y are disorganized, so to get to the result you know what you have to do.

// Examples
// justAnotherSumProblem(-10, 1) ➞ -54

// justAnotherSumProblem(-20, 5) ➞ -195

// justAnotherSumProblem(90, 45) ➞ 3105

function justAnotherSumProblem(a, b) {
    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }
    console.log(total)
}

// justAnotherSumProblem(-20, 5);

/* -------------------------------------------------------------------------- */
// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

function length(str) {
    return
}

length("apple");