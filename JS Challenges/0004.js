// Moving to the End
// Write a function that moves all elements of one type to the end of the array.

// Examples
// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// // Move all the 1s to the end of the array.

// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]

// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.

function moveToEnd(arr, el) {
    let temp1 = [];
    let temp2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            temp1.push(arr[i]);
        } else {
            temp2.push(arr[i]);
        }

    }
    console.log([...temp2, ...temp1]);
}
// moveToEnd(["a", "a", "a", "b"], "a");

/* -------------------------------------------------------------------------- */
// Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.
// Examples
// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]

// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]

// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

function matrix(x, y, z) {
    let arr = [];
    for (let i = 0; i < x; i++) {
        let tempArr = [];
        for (let j = 0; j < y; j++) {
            tempArr.push(z);
        }
        arr.push(tempArr);
    }
    console.log(arr);
}
// matrix(2, 1, 'raghul');

/* -------------------------------------------------------------------------- */
// Array Multiplier
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

// Examples
// multiply([4, 5]) ➞ [[4, 4], [5, 5]]

// multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

// multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
// Notes
// The given array contains numbers or strings.

function multiply(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        for (let j = 0; j < arr.length; j++) {
            tempArr.push(arr[i]);
        }
        temp.push(tempArr);
    }
    console.log(temp);
}
// multiply([4, 5]);

/* -------------------------------------------------------------------------- */
// Superheroes
// Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

// Examples
// superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
// ➞ ["Batman", "Spider-man", "Superman"]

// superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
// ➞ ["Aquaman"]

// superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
// ➞ []
// Notes
// Wonder-Woman, Catwoman and Invisible-Woman are superheroines.

function superheroes(heroes) {
    let superheroesArr = [];
    for (const hero of heroes) {
        console.log(hero.substring(hero.length - 3))
        if (hero.substring(hero.toLowerCase().length - 3) === "man" && hero.toLowerCase().substring(hero.length - 5) !== "woman") {
            console.log(hero)
        }
    }
}
// superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])

/* -------------------------------------------------------------------------- */
// Read the Abacus (Part 1: Russian Schoty)
// The Russian schoty is type of abacus (counting tool) that is used by sliding threaded beads along horizontal wires. An example schoty would have 7 wires, each holding 10 beads. Each bead, when moved to the left, would count as 1 unit. Starting from the bottom wire and moving up, the units increase by a factor of 10. If we use "O" for a bead and "-" to show the wire, we can represent the schoty as follows:

// ---OOOOOOOOOO  millions
// ---OOOOOOOOOO  hundred-thousands
// ---OOOOOOOOOO  ten-thousands
// ---OOOOOOOOOO  thousands
// ---OOOOOOOOOO  hundreds
// ---OOOOOOOOOO  tens 
// ---OOOOOOOOOO  ones
// To read the number, we count the beads on the left-hand side of each wire. In the example below, the number is 501264:

// ---OOOOOOOOOO  0
// OOOOO---OOOOO  5
// ---OOOOOOOOOO  0
// O---OOOOOOOOO  1
// OO---OOOOOOOO  2
// OOOOOO---OOOO  6
// OOOO---OOOOOO  4
// Given an array of strings representing each wire in the schoty, return the number being displayed.

// Examples
// schoty([
//   "---OOOOOOOOOO",
//   "---OOOOOOOOOO",
//   "---OOOOOOOOOO",
//   "OOO---OOOOOOO",
//   "O---OOOOOOOOO",
//   "OOOOOOOOO---O",
//   "OO---OOOOOOOO"
// ]) ➞ 3192

// schoty([
//   "OO---OOOOOOOO",
//   "O---OOOOOOOOO",
//   "OOOOO---OOOOO",
//   "---OOOOOOOOOO",
//   "---OOOOOOOOOO",
//   "---OOOOOOOOOO",
//   "---OOOOOOOOOO"
// ]) ➞ 2150000
// Notes
// For more info on how to use a schoty, please check the Resources tab. This challenge ignores the traditional 4-bead wires used for quarter-ruble and quarter-kopek calculations.

function schoty(frame) {
    let arr = [];
    for (let i = 0; i < frame.length; i++) {
        let arrVal = frame[i].split('---')[0];
        arr.push(arrVal.length);
    }
    console.log(Number(arr.join('')));
}
// schoty([
//     "OO---OOOOOOOO",
//     "O---OOOOOOOOO",
//     "OOOOO---OOOOO",
//     "---OOOOOOOOOO",
//     "---OOOOOOOOOO",
//     "---OOOOOOOOOO",
//     "---OOOOOOOOOO"
// ])

/* -------------------------------------------------------------------------- */
// Check if the String is a Palindrome
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

// Examples
// isPalindrome("Neuquen") ➞ true

// isPalindrome("Not a palindrome") ➞ false

// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true
// Notes
// Should be case insensitive.
// Special characters (punctuation or spaces) should be ignored.

function isPalindrome(str) {
    const regex = /[^a-zA-Z0-9\s]/g;
    var transformedString = str.toLowerCase().replace(regex, '').replace(/\s+/g, '');
    let revStr = str.toLowerCase().split('').reverse().join('').replace(regex, '').replace(/\s+/g, '');
    console.log(revStr === transformedString);
}
// isPalindrome("Not a palindrome");
// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!");

/* -------------------------------------------------------------------------- */
// Find the Discount
// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.

// Alternative Text

// Examples
// dis(1500, 50) ➞ 750

// dis(89, 20) ➞ 71.2

// dis(100, 75) ➞ 25
// Notes
// Your answer should be rounded to two decimal places.

function disc(price, discount) {
    let discoun = price - (price * discount * 0.01);
    console.log(discoun);
}
// disc(89 , 20);

/* -------------------------------------------------------------------------- */
// String Slice-athon
// This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

// Examples
// const s = "abcdefghijklmnopqrstuvwxyz"
// challenge1(s) ➞ "abcde"
// // First 5 characters of the string.

// challenge2(s) ➞ "vwxyz"
// // Last 5 characters of the string.

// challenge3(s) ➞ "zyxwvutsrqponmlkjihgfedcba"
// // All characters in the string from back.

// challenge4(s) ➞ "fedcba"
// // First 6 characters in the string (start with 6th character and go backwards).

// challenge5(s) ➞ "tvxz"
// // Take last 7 characters and only return odd positioned ones.
// Notes
// Check the Tests tab for more examples.
// See the Resources tab for further information on learning string slicing.
// You may use methods other than slice() as needed to complete some of the challenges.
// All test cases follow the same slicing pattern as the above example.

function challenge1(s) {
}

function challenge2(s) {
}

function challenge3(s) {
}

function challenge4(s) {
}

function challenge5(s) {
}

/* -------------------------------------------------------------------------- */
// Position in the Alphabet
// Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.

// Examples
// letterAtPosition(1) ➞ "a"

// letterAtPosition(26.0) ➞ "z"

// letterAtPosition(0) ➞ "invalid"

// letterAtPosition(4.5) ➞ "invalid"
// Notes
// Return a lowercase letter.
// Numbers that end with ".0" are valid.

function letterAtPosition(n) {

}

/* -------------------------------------------------------------------------- */
// Imaginary Coding Interview
// Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

// The criteria for a candidate to be qualified in the coding interview is:

// The candidate should have complete all the questions.
// The maximum time given to complete the interview is 120 minutes.
// The maximum time given for very easy questions is 5 minutes each.
// The maximum time given for easy questions is 10 minutes each.
// The maximum time given for medium questions is 15 minutes each.
// The maximum time given for hard questions is 20 minutes each.
// If all the above conditions are satisfied, return "qualified", else return "disqualified".

// You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

// Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

// The maximum time to complete the interview includes a buffer time of 20 minutes.

// Examples
// interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"

// interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"

// interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
// // Exceeded the time limit for a medium question.

// interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
// // Did not complete all the questions.

// interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
// // Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
// Notes
// Try to solve the problem using only array methods.

function interview(arr, tot) {

}

/* -------------------------------------------------------------------------- */
// The Missing Link of an Arithmetic Progression
// Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.

// To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.

// Examples
// missing([1, 3, 4, 5]) ➞ 2

// missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12

// missing([1.5, 2, 3]) ➞ 2.5
// Notes
// The missing item will never be the smallest or largest number in the array.
// In every array, exactly one item is missing.

function missing(arr) {

}

/* -------------------------------------------------------------------------- */