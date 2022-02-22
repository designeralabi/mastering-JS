let waldoIsHiding = "Somewhere Waldo is hiding in this text";

let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

//example 1
let petString = "james has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result1 = petRegex.test(petString);

console.log(result1);
