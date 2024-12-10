//Q1 Write a JavaScript program to encode a message in the language which hackers use to communicate.

var convertMe = 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.';
var pos = 0;

var replacements = {
  'a': '4',
  'e': '3',
  'i': '1',
  'o': '0',
  's': '5'
};

var newString = "";
for (i = 0; i < convertMe.length; i++) {
  var char = convertMe[i];
  newString += replacements[char] || char;
}
console.log("Q1 Answer");
console.log(newString);
console.log(" ");

//Q2. Write a JavaScript program to find how many vowels are there in the sentence.
var vowelString = "Good, better, best. Never let it rest. 'Til your good is better and your better is best";
var count = 0;

for(i=0; i < vowelString.length; i++){
    if(vowelString[i] === 'a'){
        count++
    }
    else if(vowelString[i] === 'e'){
        count++
    }
    else if(vowelString[i] === 'i'){
        count++
    }
    else if(vowelString[i] === 'o'){
        count++
    }
    else if(vowelString[i] === 'u'){
        count++
    }
}
console.log("Q2 Answer");
console.log(count);
console.log(" ");

// Q3. Write a JavaScript program which accepts a string as input and swap the case of each character.
var startingString = 'The Quick Brown Fox';
var char = ' ';
var newString = '';
for(i=0; i < startingString.length; i++){
    if(startingString[i] === startingString[i].toUpperCase()){
        newString += startingString[i].replace(startingString[i], startingString[i].toLowerCase());
    }
    else if(startingString[i] === startingString[i].toLowerCase()){
        newString += startingString[i].replace(startingString[i], startingString[i].toUpperCase());
    }
}
console.log("Q3 Answer");
console.log(newString);
console.log(" ");

/* Q4. Write a JavaScript for loop that will iterate from 0 to 10. For each iteration, it will 
check if the current number is odd or even, and display a message to the screen. */

console.log("Q4 Answer");
for(i=0; i<= 10; i++){
    if(i === 0){
        console.log('0 is neither odd nor even');
    }
    else if(i % 2 === 0){
        console.log(i + " is an even number");
    }
    else if (i % 2 !==0 ){
        console.log(i + " is an odd number")
    }
}
console.log(" ");

/* Q5. Write a JavaScript function that will reverse all the words which are of odd length.
The even length words are not changed. */ 

function reverseOddLengthWords(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => {
      if (word.length % 2 !== 0) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    });
    return reversedWords.join(' ');
  }
  
  const inputString = "There is exactly one space between each word and no punctuation is used.";
  const reversedString = reverseOddLengthWords(inputString);
  
  console.log("Q5 Answer");
  console.log(reversedString);

