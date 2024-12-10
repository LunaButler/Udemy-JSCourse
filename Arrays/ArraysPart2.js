//Q1. Write a JavaScript program to create a new array by reversing the elements of given array.
var testArray = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];

var reversedArray = testArray.reverse();

console.log("Q1 Answer:");
console.log(reversedArray);
console.log(" ");

//Q2. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.

//define two arrays
var arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
var arr2 = [7, 13, 25, 46, 58, 70, 84];

function hasCommonElement(sortedArray1, sortedArray2) {
    let i = 0; // Pointer for sortedArray1
    let j = 0; // Pointer for sortedArray2
  
    // Traverse both arrays
    while (i < sortedArray1.length && j < sortedArray2.length) {
      if (arr1[i] === arr2[j]) {
        return true; // Found a common element
      } else if (arr1[i] < arr2[j]) {
        i++; // Move pointer in the first array
      } else {
        j++; // Move pointer in the second array
      }
    }
  
    return false; // No common element found
  }
console.log("Q2 Answer: ")
console.log(hasCommonElement(arr1, arr2));
console.log(" ");

/* Q3. Write a JavaScript program to check whether a given array of integers represents 
either a strictly increasing or a strictly decreasing sequence */

function isStrictlyMonotonic(array) {
    if (array.length <= 1) return true; // A single element or empty array is monotonic
  
    let isIncreasing = true;
    let isDecreasing = true;
  
    //For loop compares the value of an array at current position to the value at the previous position
    //If value at current position is not >= previous array check if descending
    //If value at current position is not <= previous position return false
    //return either isIncreasing or isDecreasing
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= array[i - 1]) {
        isIncreasing = false; // Not strictly increasing
      }
      if (array[i] >= array[i - 1]) {
        isDecreasing = false; // Not strictly decreasing
      }
    }
  
    return isIncreasing || isDecreasing;
  }

var Q3arr1 = [4,5,6,7,8];
var Q3arr2 = [3,4,6,6,7,8,9];
var Q3arr3 = [34,23,45,55,67,77];

console.log("Q3 Answers: ");
console.log(isStrictlyMonotonic(Q3arr1));
console.log(isStrictlyMonotonic(Q3arr2));
console.log(isStrictlyMonotonic(Q3arr3));
console.log(" ");

//Q4. Write a JavaScript function to convert an amount to coins. -Skipped as the question is not understandable

/* Q5. Write a JavaScript function to create a new array from given array by formatting the
numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and
4 to 4th. */

var Q5array = [22,8, 301, 404, 35, 99];

function formatNumbersWithSuffix(array) {
    return array.map(number => {
      if (typeof number !== "number" || number < 1) {
        return `${number}`; // Return as is if it's not a positive number
      }
  
      const lastDigit = number % 10;
      const lastTwoDigits = number % 100;
  
      // Determine the suffix
      let suffix = "th"; // Default suffix
      if (lastTwoDigits < 11 || lastTwoDigits > 13) {
        if (lastDigit === 1) suffix = "st";
        else if (lastDigit === 2) suffix = "nd";
        else if (lastDigit === 3) suffix = "rd";
      }
  
      return `${number}${suffix}`;
    });
  }

var formattedNumbers = formatNumbersWithSuffix(Q5array);
console.log("Q5 Answer: ")
console.log(formattedNumbers);
