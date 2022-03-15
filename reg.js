//example 1
// RegEx with either type checking
let petString = "james has a pet fish.";
let petRegex = /dog|cat|bird|fish/;
let result1 = petRegex.test(petString);

console.log(result1);

//example 2
let studentNum = "the student are 38 in numbers";
let schoolNum = /ar|8|stu/;
let schoolResult = schoolNum.test(studentNum);

console.log(schoolResult);

//RegEx Case ignore while matching
let myString = "freeCodeCamp";
let fccRegex = /FreeCODECamp/i;
let result = fccRegex.test(myString);
console.log(result);


// pratice with the Match method;
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;

let ourRegexResult = ourStr.match(ourRegex);
//console.log(ourRegexResult);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let rresult = extractStr.match(codingRegex);
// Change this line
console.log(rresult);


//wildcards with RegEx
let humStr = "I'll hum a song ";
let hugStr = "Bear hug";
let hugRex = /hu./;

humStr.match(hugRex);
hugStr.match(hugRex); 