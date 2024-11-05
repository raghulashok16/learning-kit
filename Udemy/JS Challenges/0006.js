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
    console.log(steps)
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
    let arr2 = arr.filter(v => v > 0);
    let arr3 = arr.filter(v => v < 0);
    console.log(arr2);
    console.log(arr3);
    let arr4 = (arr2.length > arr3.length) ? arr2 : arr3;
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
    console.log((b === c) ? a : b);
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
        temp = temp + tempValue
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
        console.log(a, b)
        if (!(b % 2 === 0)) {
            console.log(a)
        }
    }
}

// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);