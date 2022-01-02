/*
    in html

    <body>
        <p>First text</p>
    </body>
*/

// creates new p tag in th Dom
const element = document.createElement('p');
// add text to the element
element.textContent = "second Paragraph";
// added the new created element to the DOM
document.body.appendChild(element);