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
        if ((arr[i] === "Frodo" && arr[i + 1] === "Sam") || (arr[i] === "Sam" && arr[i + 1] === "Frodo")) {
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
    let arr = n.toString().split('');
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
    let arr = n.toString().split('');
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
    console.log(parseInt(arr.join(''), 2));
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
    let val = date.split('/').join('');
    let temp = val.split('').reverse().join('')
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
    let temp = '';
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
        temp = temp + '0' + `${h}`
    }
    if (m > 9) {
        temp = temp + ":" + `${m}`;
    } else {
        temp = temp + ':' + '0' + `${h}`
    }
    if (s > 9) {
        temp = temp + ":" + `${s}`;
    } else {
        temp = temp + ':' + '0' + `${s}`
    }
    console.log(temp);
}
simpleTimer(8699);