var names = ['john', 'fisher', 'emmanuel'];

// output which comes first in alphabetical order
console.log(names.sort());

// output which comes first based on length
console.log(names.sort((a,b)=>{
    return a.length - b.length;
}));

var letters = ['a', 'f', 'e', '1', '2', 'A'];
console.log(letters.sort((a, b)=>{
    return a.toString().localeCompare(b);
}));

// coutput the code charater value in the ASCII table
console.log(letters[3].charCodeAt());
