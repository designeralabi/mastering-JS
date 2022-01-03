
// objects filled with arrays 
var bioData = {
    numberOfCity: ['lagos', 'Anambra', 'benue', 'asaba'],
    numberOfAge: [15, 18, 20, 35]
};

console.log(bioData.numberOfCity);


// arrays of objects
var collections = [
    {
        name: "smith",
        country: "Nigeria",
        religion: 'islam'
    },
    {
        name: "sandra",
        country: "canada",
        religion: "christainity"
    }
];
console.log(collections);
// objects does not works with ordering unless if associated with arrays

var bioData2 = {
    numberOfCity: ['lagos', 'Anambra', 'benue', 'asaba'],
    numberOfAge: [15, 18, 120, 35]
};

// stops the object from accepting new value 
Object.freeze(bioData2);
bioData2.town = "nigeria";

console.log(bioData2);