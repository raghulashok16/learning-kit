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
  let symb = "";
  let i = 0;
  while (i <= card.length - 5) {
    symb = symb + "*";
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
  if (a + b < 100) {
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

const [first, second, third, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(first);
console.log(second);
console.log(third);
console.log(others);

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
  return arr.filter((x) => x.length >= 1);
}

console.log(removeEmptyArrays(["a", "b", [], [], [1, 2, 3]]));

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
  console.log(total);
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

function length(str) {}

// length("apple");

/* -------------------------------------------------------------------------- */

// Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// Examples
// middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

// middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
// Notes
// No matter who comes first, the result must be true if Frodo and Sam are side by side.
// There is only one Sam and one Frodo in the array.

function middleEarth(arr) {
  let setval = false;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "Frodo" && arr[i + 1] === "Sam") ||
      (arr[i] === "Sam" && arr[i + 1] === "Frodo")
    ) {
      setval = true;
    }
  }
  console.log(setval);
}

middleEarth(["Frodo", "Saruman", "Sam"]);

// Burglary Series (07): Make a Copy
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

// Examples
// { piano: 100, tv: 50 } ➞ { piano: 100, tv: 50 }

function makeCopy(obj) {
  duplicateObj = { ...obj };
  console.log(obj);
  console.log(duplicateObj);
}

makeCopy({ piano: 100, tv: 50 });

// Sum of Two Digit Numbers
// For this challenge, you are supposed to find the sum of the digits of a two-digit number. Sounds easy, right? But for this challenge, I expect you to find the sum of the digits mathematically.

// Sure, you can convert the number into a string and then manipulate it so it returns the sum of the digits, but the point of this challenge is to see if you know how to return the sum of the digits of a two-digit number mathematically.

// Examples
// twoDigitSum(45) ➞ 9

// twoDigitSum(38) ➞ 11

// twoDigitSum(67) ➞ 13

function twoDigitSum(n) {
  let arr = n.toString().split("");
  const result = Number(arr[0]) + Number(arr[1]);
  console.log(result);
}

twoDigitSum(67);

// Narcissistic Number
// A Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits.

// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1652 (4 digits), is non-narcisstic:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// Create a function that returns true or false depending upon whether the given number n is a Narcissistic number or not.

// Examples
// isNarcissistic(153) ➞ true

// isNarcissistic(370) ➞ true

// isNarcissistic(1652) ➞ false

function isNarcissistic(n) {
  let temp = 0;
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    const val = Number(arr[i]) ** arr.length;
    temp += val;
    console.log(temp);
  }
  if (temp === n) {
    console.log("Narcissistic Number");
  } else {
    console.log("Not Narcissistic Number");
  }
}

isNarcissistic(372);

// Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
// arraySum([1, 3, 3, 1, 10]) ➞ 105.46

// arraySum([2, 3, 4, 5]) ➞ 23.97

// arraySum([1, 31, 3, 11, 0]) ➞ 11.62

function arraySum(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const val = nums[i] ** 2;
      temp += val;
    } else {
      const val = Math.sqrt(nums[i]);
      temp += val;
    }
  }
  console.log(Math.round(temp * 100) / 100);
  // 100 - for 2 decimal places, 1000 for three decimal places.
}

arraySum([1, 31, 3, 11, 0]);

// Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

function volumeOfBox(sizes) {
  let temp = 1;
  let arr = Object.values(sizes);
  for (const value of arr) {
    temp *= value;
  }
  console.log(temp);
}

volumeOfBox({ width: 4, length: 2, height: 2 });

// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples
// binaryToDecimal([0, 0, 0, 1]) ➞ 1

// binaryToDecimal([0, 0, 1, 0]) ➞ 2

// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005

function binaryToDecimal(arr) {
  console.log(parseInt(arr.join(""), 2));
}

binaryToDecimal([0, 0, 1, 0]);

// Palindromic Dates
// The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.

// Examples
// palindromicDate("02/02/2020") ➞ true

// palindromicDate("11/12/2019") ➞ false

// palindromicDate("11/02/2011") ➞ false
// // Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// // it isn't in mm/dd/yyyy format (02/11/2011)
// Notes
// All dates will be valid in both date formats.
// The date must be palindromic in both dd/mm/yyyy and mm/dd/yyyy formats to pass.

function palindromicDate(date) {
  let val = date.split("/").join("");
  let temp = val.split("").reverse().join("");
  console.log(Number(val), Number(temp));
  console.log(val === temp);
}

palindromicDate("02/02/2020");

// A Simple Timer
// Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.

// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

// Examples
// simpleTimer(0) ➞ "00:00:00"

// simpleTimer(59) ➞ "00:00:59"

// simpleTimer(60) ➞ "00:01:00"

// simpleTimer(3599) ➞ "00:59:59"

function simpleTimer(seconds) {
  let temp = "";
  let h, m, s;
  if (seconds % 3600) {
    h = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
  }
  if (seconds % 60) {
    m = Math.floor(seconds / 60);
    s = seconds % 60;
  }
  if (h > 9) {
    temp = temp + `${h}`;
  } else {
    temp = temp + "0" + `${h}`;
  }
  if (m > 9) {
    temp = temp + ":" + `${m}`;
  } else {
    temp = temp + ":" + "0" + `${h}`;
  }
  if (s > 9) {
    temp = temp + ":" + `${s}`;
  } else {
    temp = temp + ":" + "0" + `${s}`;
  }
  console.log(temp);
}
simpleTimer(8699);

/* -------------------------------------------------------------------------- */

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
  let val = Number(temp.split("*")[0]);
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
  let sclicedSentence =
    sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
  const attachmentSentence = "whispered Edabit.";
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
    console.log("bad match");
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

  console.log(`const ${arr[0]} = (${arr[1]} => {}`);
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
  let temp = num.toString().split("");
  let val = 1;
  for (let i = 0; i < temp.length; i++) {
    val = val * temp[i];
  }
  console.log(val);
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
  console.log(Math.round((138 * Math.log10(Dd / Dc)) / Math.sqrt(er)));
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
// isScalable([40, 45, 50, 45, 47, 52]);
/* -------------------------------------------------------------------------- */

// Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples
// firstPlace("====b===O===e===U=A==") ➞ "A"

// firstPlace("e==B=Fe") ➞ "e"

// firstPlace("proeNeoOJGnfl") ➞ "l"
// Notes
// Return "No car available" if there is no car on the road and "No road available" if there is no road.

function firstPlace(road) {
  let temp = road.split("");
  let roadVal = false;
  let carVal = false;
  let car = "";
  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "=") {
      roadVal = true;
    } else {
      car = temp[i];
      carVal = true;
    }
  }
  if (roadVal && carVal) {
    console.log(car);
  } else if (!roadVal) {
    console.log("No road available");
  } else if (!carVal) {
    console.log("No car available");
  }
  console.log(car, roadVal, carVal);
}
// firstPlace("jshisb=");
/* -------------------------------------------------------------------------- */

// Crypto Wars: Missing Number
// Our fleet managed to get one of the enemy's top-secret codes from the remains of its fallen ship. The codes were immediately sent over to our code-breaking base over at Bleckley Park ;) for analysis. The team found that each code contains 25 numbers with one missing. The missing number corresponds to a letter in the English alphabet. Your job is to find a more efficient Method of decrypting the messages by digitizing the process.

// Write a function that takes an array, detects the missing number (in the array), and returns its corresponding letter.

// Examples
// decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]) ➞ "O"
// // The missing number is 15.

// decrypt([24, 12, 2, ..., 25]) ➞ "N"
// // The missing number is 14.

// decrypt([24, 12, 2, ..., 25]) ➞ "P"
// // The missing number is 16.
// Notes
// The array will only contain positive integers from 1 to 26 with one missing.
// There will be no duplicate numbers.
// Return the capital letter.

function decrypt(arr) {
  let maxVal = Math.max(...arr);
  let totalVal = (maxVal * (maxVal + 1)) / 2;
  let actTotalVal = arr.reduce((a, c) => a + c, 0);
  let missingNumber = totalVal - actTotalVal;
  console.log(String.fromCharCode(missingNumber + 64));
  console.log(maxVal, totalVal, actTotalVal, missingNumber);
}
// decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9,15, 16, 24, 17, 2, 10, 13, 18, 8, 4, 5, 1, 6, 25, 23, 26]);
/* -------------------------------------------------------------------------- */

// Last Digit Ultimate
// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

// Examples
// lastDig(25, 21, 125) ➞ true
// // The last digit of 25 is 5, the last digit of 21 is 1, and the last
// // digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// // to the last digit of 125(5).

// lastDig(55, 226, 5190) ➞ true
// // The last digit of 55 is 5, the last digit of 226 is 6, and the last
// // digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// // equal to the last digit of 5190(0).

// lastDig(12, 215, 2142) ➞ false
// // The last digit of 12 is 2, the last digit of 215 is 5, and the last
// // digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// // not equal to the last digit of 2142(2).
// Notes
// Numbers can be negative.

function lastDig(a, b, c) {
  const val1 = (a * b).toString().split("");
  const val2 = c.toString().split("");
  const result = val1.pop() === val2.pop() ? true : false;
  console.log(result);
}
// lastDig(25, 21, 125);
/* -------------------------------------------------------------------------- */

// Hold Your Breath!
// You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

// Positive numbers represent height above the water.
// 0 is sea level.
// Negative numbers represent depth below the water's surface.
// Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

// Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in the array. Watch out! If your breath diminishes to 0, your character dies!

// To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.

// Your function should return true if your character survives, and false if not.

// Worked Example
// divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// // Breath meter starts at 10.
// // -5 is below water, so breath meter decreases to 8.
// // -15 is below water, so breath meter decreases to 6.
// // -4 is below water, so breath meter decreases to 4.
// // 0 is at sea level, so breath meter increases to 8.
// // 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// // Character survives!
// Examples
// divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ true

// divingMinigame([-3, -6, -2, -6, -2]) ➞ false

// divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]) ➞ false
// Notes
// Lists may be of any length.
// All arrays are valid.

function divingMinigame(arr) {
  let val = 10;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      val -= 2;
    } else {
      if (val > 6) {
        val = 10;
      } else {
        val += 2;
      }
    }
    console.log(val);
  }
  console.log(val > 0 ? true : false);
}
// divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]);

/* -------------------------------------------------------------------------- */

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
    console.log(hero.substring(hero.length - 3));
    if (
      hero.substring(hero.toLowerCase().length - 3) === "man" &&
      hero.toLowerCase().substring(hero.length - 5) !== "woman"
    ) {
      console.log(hero);
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
    let arrVal = frame[i].split("---")[0];
    arr.push(arrVal.length);
  }
  console.log(Number(arr.join("")));
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
  var transformedString = str
    .toLowerCase()
    .replace(regex, "")
    .replace(/\s+/g, "");
  let revStr = str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replace(regex, "")
    .replace(/\s+/g, "");
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
  let discoun = price - price * discount * 0.01;
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

function challenge1(s) {}

function challenge2(s) {}

function challenge3(s) {}

function challenge4(s) {}

function challenge5(s) {}

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
  if (Number.isInteger(n) && n > 0 && n < 27) {
    console.log(String.fromCharCode(96 + n));
  } else {
    console.log("invalid");
  }
}
// letterAtPosition(1);

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
  let timeArray = [5, 5, 10, 10, 15, 15, 20, 20];
  let preTime = timeArray.reduce((a, c) => a + c, 0);
  console.log(preTime);

  let calTime = arr.reduce((a, c) => a + c, 0);
  console.log(calTime);

  if (arr.length === timeArray.length && tot <= 120 && calTime <= preTime) {
    let calculations = true;
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] <= timeArray[i])) calculations = false;
    }
    if ((calculations = true)) {
      console.log("qualified");
    } else {
      console.log("disqualified");
    }
  } else {
    console.log("disqualified");
  }
}
// interview([5, 5, 10, 10, 15, 15, 19, 20], 120);

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
  let tempArr = arr.map((a) => a / arr[0]);
  console.log(tempArr);
}
missing([1.5, 2, 3]);

/* -------------------------------------------------------------------------- */
// Automorphic Numbers
// A number n is automorphic if n^2 ends in n.

// For example: n=5, n^2=25

// Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

// Examples
// isAutomorphic(5) ➞ true

// isAutomorphic(8) ➞ false

// isAutomorphic(76) ➞ true

function isAutomorphic(n) {
  let lastNum = (n ** 2).toString();
  // console.log(lastNum);
  // console.log(n)
  console.log(Number(lastNum.substring(n.toString().length)) === n);
}
// isAutomorphic(76);
// isAutomorphic(8);
// isAutomorphic(5);

/* -------------------------------------------------------------------------- */

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
  const alphabet = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let alphabet2 = "";
  const arrayString = word.split("");
  if (num < 0) {
    console.log("invalid");
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
    console.log(alphabet2);
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

findIt(
  {
    tv: 30,
    timmy: 20,
    stereo: 50,
  },
  "timmy"
);

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

function stripSentence(str, chars) {}
stripSentence("gone, reduced to atoms", "go, muscat nerd");

/* -------------------------------------------------------------------------- */

// Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// Examples
// incrementToTop([3, 4, 5]) ➞ 3
// // Maximal element in the array is 5.
// // To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// // To transform 4 to 5 requires 1 step: 4 -> 5.
// // Total steps required is 3.

// incrementToTop([4, 3, 4]) ➞ 1
// // Maximal element in the array is 4.
// // To transform 3 to 4 requires 1 steps: 3 -> 4.
// // Total steps required is 1.

// incrementToTop([3, 3, 3]) ➞ 0

// incrementToTop([3, 10, 3]) ➞ 14
// Notes
// If the array contains only the same digits, return 0 (see example #3).
// Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max beforehand)

function incrementToTop(arr) {
  let maxVal = Math.max(...arr);
  console.log(maxVal);
  let steps = 0;
  for (const val of arr) {
    steps = steps + (maxVal - val);
  }
  console.log(steps);
}
// incrementToTop([3, 4, 5]);

/* -------------------------------------------------------------------------- */
// Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// Examples
// lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// // 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// // -4 has no matching positive appearance.

// lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9

function lonelyInteger(arr) {
  let arr2 = arr.filter((v) => v > 0);
  let arr3 = arr.filter((v) => v < 0);
  console.log(arr2);
  console.log(arr3);
  let arr4 = arr2.length > arr3.length ? arr2 : arr3;
  for (const val of arr4) {
    if (!arr.includes(val * -1)) {
      console.log(val);
    }
  }
}
// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]);

/* -------------------------------------------------------------------------- */
// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples
// squarePatch(3) ➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

// squarePatch(5) ➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

// squarePatch(1) ➞ [
//   [1]
// ]

// squarePatch(0) ➞ []

function squarePatch(n) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    let temp1 = [];
    for (let j = 0; j < n; j++) {
      temp1.push(n);
    }
    temp.push(temp1);
  }
  console.log(temp);
}
// squarePatch(3);

/* -------------------------------------------------------------------------- */
// Swap the Numbers
// Imagine you have three numbers: a, b, and c. c is equal to either a or b, but you don't know which one. Your task is to create a function that returns whatever number c isn't, out of a and b. So, if c is equal to a, return b, and if c is equal to b, return a. Here's what makes this challenge difficult: you cannot use any if statements.

// Examples
// swap(1, 0, 0) ➞ 1
// // a = 1, b = 0, c = b
// // return a

// swap(1, 3, 1) ➞ 3
// // a = 1, b = 3, c = a
// // return b

// swap(27, 31, 31) ➞ 27
// // a = 27, b = 31, c = b
// // return a
// Notes
// To prevent cheating, you also can't call any functions.
// c will always be equal to either a or b.
// a will never equal b.
// a, b, and c will always be integers.

function swap(a, b, c) {
  console.log(b === c ? a : b);
}
// swap(27, 31, 31);

/* -------------------------------------------------------------------------- */
// Doubled Pay
// An employee working at a very bizarre company earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.

// Examples
// doubledPay(1) ➞ 1

// doubledPay(2) ➞ 3

// doubledPay(3) ➞ 7
// Notes
// You will only get tests for valid positive integers.

function doubledPay(n) {
  let temp = 0;
  let tempValue = 1;
  for (let i = 1; i <= n; i++) {
    temp = temp + tempValue;
    tempValue = tempValue * 2;
  }
  console.log(temp);
}
// doubledPay(4);

/* -------------------------------------------------------------------------- */
// Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples
// nthSmallest([1, 3, 5, 7], 1) ➞ 1

// nthSmallest([1, 3, 5, 7], 3) ➞ 5

// nthSmallest([1, 3, 5, 7], 5) ➞ null

// nthSmallest([7, 3, 5, 1], 2) ➞ 3
// Notes
// n will always be >= 1.
// Each integer in the array will be distinct (there will be a clear ordering).
// Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest integer, return null.

function nthSmallest(arr, n) {
  let temp = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (temp[j] < temp[j + 1]) {
        [temp[j], temp[j + 1]] = [temp[j + 1], temp[i]];
      }
    }
  }
  console.log(temp);
  console.log(temp[n - 1] === undefined ? null : temp[n - 1]);
}
// nthSmallest([1, 3, 5, 7], 5);

/* -------------------------------------------------------------------------- */
// Find the Odd Integer
// Create a function that takes an array and finds the integer which appears an odd number of times.

// Examples
// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1

// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ➞ 5

// findOdd([10]) ➞ 10
// Notes
// There will always only be one integer that appears an odd number of times.

function findOdd(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (`${arr[i]}` in obj) {
      obj[`${arr[i]}`] = obj[`${arr[i]}`] + 1;
    } else {
      obj[`${arr[i]}`] = 1;
    }
  }
  let arrDes = Object.entries(obj);
  let temp = true;
  for (const [a, b] of arrDes) {
    console.log(a, b);
    if (!(b % 2 === 0)) {
      console.log(a);
    }
  }
}

// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
