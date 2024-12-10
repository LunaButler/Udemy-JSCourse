//Q1. Write a JavaScript program to find the longest string from a given array.
// Define an array of strings
var testArray = ['asdf', 'sd', 'something','right','position'];

// Use reduce to find the longest string
const longestString = testArray.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

// Output the result
console.log("Q1 Answer:");
console.log("The longest string is:", longestString);
console.log(" ");

//Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.
var testArray2 = [NaN, 0, 15, false, -22, '',undefined, 47, null,94];


// Use filter to remove null, undefined, and NaN
const cleanedArray = testArray2.filter(value => {
    return value !== null && value !== undefined && !Number.isNaN(value) && value != false;
  });
  
  // Output the result
  console.log("Q2 Answer:");
  console.log("Cleaned Array:", cleanedArray);
  console.log(" ");

/* Q3: Write a JavaScript code to divide a given array of positive integers into two parts.
First element goes to first part, second element goes to second part, and third element
goes to first part and so on.

Now compute the sum of two parts and store into an array of size two. 

This question does not make sense: Skipped
*/

//Q4. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.

//Define a pair of arrays with one shared value

var arr1 = [1,2,3];
var arr2 = [3,4,5];

console.log("Q4 Answer:")
function arraysShareValue(arr1, arr2) {
    return arr1.some(value => arr2.includes(value));
  }

console.log(arraysShareValue(arr1, arr2));
console.log(" ");


//Q5.  Write a JavaScript function to find the difference of two arrays.

var arr3 =[1,2,3];
var arr4 =[100,2,1,10];

function arrayDifference(arr3, arr4) {
    // Find elements in arr3 that are not in arr4
    const difference1 = arr3.filter(value => !arr4.includes(value));
    
    // Find elements in arr4 that are not in arr3
    const difference2 = arr4.filter(value => !arr3.includes(value));
    
    // Combine the differences
    return [...difference1, ...difference2];
  }
  console.log("Q5 Answer: ")
  console.log(arrayDifference(arr3, arr4))