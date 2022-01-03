function Hotel(name, room, booked){
    this.name = name;
    this.room = room;
    this.booked = booked;
    this.roomCurrentAvailable = ()=>{
        return this.room - this.booked;
    };
}

let hotel1 = new Hotel('celina', 100, 30);
console.log(`the total number of room avaliable in ${hotel1.name} hotel is ${hotel1.roomCurrentAvailable()}`);

let hotel2 = new Hotel('mabilah', 120, 40);
console.log(`the total number of room avaliable in ${hotel2.name} hotel is ${hotel2.roomCurrentAvailable()}`);
