// an array list of names 
const names = ['sandra', 'david', 'jonathan', 'kyle', 'darnish'];

// returns names not equal to david
const filteredName = names.filter((name)=>{
    return name !== 'david';
});

// prints the result 
console.log(filteredName);