// 1. Print 1-255
// Print1To255()
// Print all the integers from 1 to 255.

function Print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}
Print1To255();


// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

function PrintOdds1To255() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

}
PrintOdds1To255();


// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer
// print the sum so far.

function PrintIntsAndSum0To255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum = sum + i;
        console.log(i);
        console.log(sum);
    }
}
PrintIntsAndSum0To255();


// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// PrintArrayVals(arr)

var array = [3, 4, 5, 6];

function PrintArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
PrintArrayVals(array);


// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.

var numArr1 = [3, 4, 5, 6];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function PrintMaxOfArray(arr) {
    var maxNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}
PrintMaxOfArray(numArr2);


// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

var numArr1 = [3, 4, 5, 6, 2];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function PrintAverageOfArray(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);
}
PrintAverageOfArray(numArr1);


// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255 (inclusive).

function ReturnOddsArray1To255() {
    var newArr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(ReturnOddsArray1To255());


// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

var numArr1 = [3, 4, 5, 6, 2];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function SquareArrayVals(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr;
}
console.log(SquareArrayVals(numArr1));


// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the
// number of array values greater than Y.

var numArr1 = [3, 4, 5, 6, 2];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count;
}
console.log(ReturnArrayCountGreaterThanY(numArr1, 3));


// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative
// values to zero.

var numArr1 = [3, 4, 5, 6, 2];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(ZeroOutArrayNegativeVals(numArr3));