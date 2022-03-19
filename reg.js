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

console.log(humStr.match(hugRex));
console.log(hugStr.match(hugRex));

//finding more with RegEx
let testStr = "Repeat, Repeat, Repeat";
let ourNewRegex = /Repeat/g;

let regResult = testStr.match(ourNewRegex);
console.log(regResult);

let greetingName = /n[am]e/;
let welcome = "Hello world, my name is this and dat";

let greetChecker = welcome.match(greetingName);

console.log(greetChecker);

//matching character with multiple Possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /[a,e,i,o,u]/gi;
let quoteResult = quoteSample.match(vowelRegex);

console.log(quoteResult);

//matching character with multiple Possibilities
let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

// if | g- flag| is not included it only matches the first it vowel;
let vowelRegex1 = /[a,e,i,o,u]/i;
let quoteResult2 = quoteSample1.match(vowelRegex1);

console.log(quoteResult2);
