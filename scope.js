/*
scope is a set of variables, value, objects & function you have access to

Types of scope
    - Local Scope: " A variable declared inside a function, its value can 
    only be accept within its function & thus accessing it value outside is nor possible"

    - Global Scope: "A variable declared outside a function scope & it value is access anywhere within the program"
*/

// - Global Scope

const a = 4; // global scope

function foo(){
    const b = a * 3; // the value of b can only be access within the foo function but not outside 

    console.log(b); // returns 12 

    function bar(c){
        const b = 2; // here a new b  variable is declared, so it does not affect the formal 

        console.log(a, b, c); // prints 4, 2, 
    }

    bar(b * 5); // the value of first b is passed to the bar and mulitplied by 5 (12 * 5)
}


