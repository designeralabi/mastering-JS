let waldoIsHiding = 'Somewhere Waldo is hiding in this text';

let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);