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
isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!");