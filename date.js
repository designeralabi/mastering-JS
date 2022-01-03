const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getUTCMonth();

const todayTime = today.getHours();

if (todayTime <= 12){
    console.log(todayTime + "am");
}else{
    console.log(todayTime + "pm");
}


console.log(today.toString(), todayYear, todayMonth);

var options = {
    weekday: 'long',
    day: 'numeric',
    month: "long",
    year: 'numeric'
};

const nowtoday = today.toLocaleString("en-us", options);
console.log(nowtoday);

// output the number of miliseconds since january 1, 1970 to now
console.log(Date.now());
