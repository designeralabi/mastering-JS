var street = 'ikorodu';
var city = 'lagos';


// this state compare string lexicographically if street('ikorodu) comes after city('lagos)? yes
// returns 1(positive) because 'i' comes before 'l'
console.log(city.localeCompare(street));

// returns 0 if both strings are equal
/*
    var a = 'hello'
    var b = 'hello'

    console.log(a.localCompare(b)) // 0
*/