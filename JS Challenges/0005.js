// Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples
// countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.

// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

// countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

// countPosSumNeg([]) ➞ []
// Notes
// If given an empty array, return an empty array: []
// 0 is not positive.

function countPosSumNeg(arr) {
    let count = 0;
    let sum = 0;
    for (const val of arr) {
        if (val > 0) {
            count += 1;
        } else {
            sum += val;
        }
    }
    console.log(count, sum);
}
// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]);

/* -------------------------------------------------------------------------- */
// Extend the Vowels
// Create a function that takes a word and extends all vowels by a number num.

// Examples
// extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"

// extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"

// extendVowels("Extend", 0) ➞ "Extend"
// Notes
// Return "invalid" if num is not a positive integer or 0.

function extendVowels(word, num) {
    const alphabet = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let alphabet2 = '';
    const arrayString = word.split('');
    if (num < 0) {
        console.log('invalid');
    } else {

        for (let i = 0; i < arrayString.length; i++) {
            if (alphabet.includes(arrayString[i])) {
                for (let j = 0; j <= num; j++) {
                    alphabet2 = alphabet2 + arrayString[i];
                }
            } else {
                alphabet2 = alphabet2 + arrayString[i];
            }
        }
        console.log(alphabet2)
    }
}
// extendVowels("Edabit", 3);

/* -------------------------------------------------------------------------- */
// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function nameString(name) {
    var b = "Edabit";
    var result = name + b;
    console.log(result);
}
// nameString("Matt");

/* -------------------------------------------------------------------------- */
// Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

// Examples
// const obj = {
//   tv: 30,
//   timmy: 20,
//   stereo: 50,
// } ➞ "Timmy is gone..."
// // Timmy is in the object.


// const obj = {
//   tv: 30,
//   stereo: 50,
// } ➞ "Timmy is here!"
// // Timmy is not in the stolen list object.


// const obj = { } ➞ "Timmy is here!"
// // Timmy is not in the object.

function findIt(obj, name) {
    let keys = Object.keys(obj);
    if (keys.includes(name)) {
        console.log(`${name} is gone...`);
    } else {
        console.log(`${name} is here!`);
    }
    // console.log(keys);
}

findIt({
    tv: 30,
    timmy: 20,
    stereo: 50,
}, "timmy");

/* -------------------------------------------------------------------------- */
// Stripping a Sentence Down
// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

// Examples
// stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

// stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

// stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
// Notes
// You may be asked to remove punctuation and spaces.
// Return an empty string if every character is specified (see example #3).
// All tests will be in lowercase.

function stripSentence(str, chars) {

}
stripSentence("gone, reduced to atoms", "go, muscat nerd");