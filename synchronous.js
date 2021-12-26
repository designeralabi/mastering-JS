/*
synchronous code are codes that executes line by line, 
thus means for the next line of code to work the first line of code has to finish it running.
*/

// example 
// for the next line of code to executes the first as to finish.
var photos = download("http://foo-chan.com/images/sp.jpg");
upload(photos, 'designerAlabi');

// advantages
/*
    - Good for something that runs/works very fast
*/

// disavantages
/*
    - Bad for things that takes time to process , e.g saving, loading, fetching, downloading
    - it also know as blocking code , because A have to happend before B
*/