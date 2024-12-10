//Part 1 was an introduction to loops without any practice problems
//Q1: Write a JavaScript program to find the GCD of two numbers : 15 and 25.

var num1 = 15;
var num2 = 25;

function gcdIterative(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

console.log("Q1 Answer:")
console.log(gcdIterative(num1, num2));
console.log(" ")

// Q2: Write a JavaScript program to print the LCM of two numbers: 15 and 20?

//find the gcd of the two numbers for lcm formula
function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  //use the results to calculate lcm
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  var num1 = 5;
  var num2 = 18;

  var result = lcm(num1, num2);
  console.log("Q2 Answer:");
  console.log(`The LCM is ${result}`);
  console.log(" ");

  /* Q3: Write a JavaScript program to find the number of even values in sequence before
  the first occurrence of a given number. [Hint: You can use while loop here] */

  function countEvenBeforeNumber(anArray, stopHere) {
    var count = 0;
    var i = 0;
  
    while (i < anArray.length && anArray[i] !== stopHere) {
      if (anArray[i] % 2 === 0) {
        count++;
      }
      i++;
    }
  
    return count;
  }

var anArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var stopHere = 8;
  

  
var evenCount = countEvenBeforeNumber(anArray, stopHere);
console.log("Q3 Answer: ");
console.log("Number of even values before", stopHere, "is:", evenCount);
console.log(" ");

//Q4 Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log("Q4 Answer:");
console.log(sum);
console.log(" ");

/* Q5 Write a JavaScript program which iterates the integers from 1 to 15. But for
multiples of three print "Fizz" instead of the number and for the multiples of five print
"Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

function iterativeLoop(a, b){
    for (i = 1; i <= 15; i++){
        if(i % a === 0 && i % b === 0){
            console.log(i+ " FizzBuzz");
        }
        else if(i % b === 0){
            console.log(i + " Buzz");
        }
        else if(i % a === 0){
            console.log(i + " Fizz");
        }
    }
}
console.log(iterativeLoop(3,5));