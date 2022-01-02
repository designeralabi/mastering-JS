/* 
    - in html
    <body>
        <p id="paragraph">learning javascript</p>
    </body>
*/


// in Javscript
// change the id value 
const changeText = document.getElementById("paragraph").textContent = "Hello World";

/*
    - result output

    <body>
        <p id="paragraph"> changeText </p>  // "Hello world"
    </body>
*/ 