// ALL ALGORITHMS SHOULD BE WRITTEN AS FUNCTIONS

var numArr1 = [3, 4, 5, 6]
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2]
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4]

// 1. Print 1-255
// print1To255()
// Print all the integers from 1 to 255

function print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}
print1To255()

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
PrintOdds1To255()

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 


function PrintIntsAndSum0To255() {
    var sum = 0
    for (var i = 0; i <= 255; i++) {
        sum = sum + i
        console.log(i)
        console.log(sum)
    }
}
PrintIntsAndSum0To255()

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

function PrintArrayVals(arr) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr[i])
    }
}
PrintArrayVals([3, 4, 5, 6])

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

var numArr1 = [3, 4, 5, 6]
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2]
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4]
function PrintMaxOfArray(arr) {
    var newNum = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (newNum < arr[i]) {
            newNum = arr[i];
        }
    }
    return newNum
}
console.log(PrintMaxOfArray(numArr2))

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

var numArr1 = [3, 4, 5, 6, 2]
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2]
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4]

function PrintAverageOfArray(arr) {
    var sum = 0
    var avg = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    avg = sum / arr.length
    return avg
}
console.log(PrintAverageOfArray(numArr1))


// var arr = [2, 5, 3, 1, 2]
// var arr = [2, 5, 3, 1, 2, 3]
// var arr = [2, 5, 3, -1, 2, 3]

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

function ReturnOddsArray1To255() {
    var newArr = []
    for (var i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }
    return newArr
}
console.log(ReturnOddsArray1To255())


// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// var arr = [2, 5, 3, 1, 2]
// output: [4, 25, 9, 1, 4]

function SquareArrayVals(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
}
SquareArrayVals([2, 5, 3, 1, 2])

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}
console.log(ReturnArrayCountGreaterThanY())



// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero
// var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];
// output:  [3, 0, 2, 0, 8, 10, 0, 6, 0];

var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}
console.log(ZeroOutArrayNegativeVals(numArr3))

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

var arr = [1, 2, 3, 4, 5];
function PrintMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

        if (max < arr[i]) {
            max = arr[i];
        }

        if (min > arr[i]) {
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    var maxMinAvg = [max, min, avg];
    console.log(maxMinAvg)
    return maxMinAvg
}
PrintMaxMinAverageArrayVals(arr)

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// var arr = [2, 5, 3, 1, 2]
// output: [5, 3, 1, 2, 0]
var arr = [2, 5, 3, 1, 2]


function ShiftArrayValsLeft(arr) {
    var newArr = []
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    newArr.push(0)
    arr = newArr
    console.log(arr)
    return arr
}
ShiftArrayValsLeft(arr)


// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
// var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];
// output: [3, "Dojo", 2, "Dojo", 8, 10, "Dojo", 6, "Dojo"];

var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr)
    return arr
}
SwapStringForArrayNegativeVals(numArr3)