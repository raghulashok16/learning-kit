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