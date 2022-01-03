var score = 100;

// best pratice using the fall through 
switch (score){
    case 100:
    case 200:
        console.log("your score is high so you passed");
    break;
    case 50:
        console.log('you score pass average so you passed');
    break;
    case 25:
        console.log('you score is average');
    break;
    default:
        console.log("try again, who knows you might pass");
}

// bad pratice
switch (score){
    case ((score === 100) || (score >= 200)):
        console.log("your score is high so you passed");
    break;
    case 50:
        console.log('you score pass average so you passed');
    break;
    case 25:
        console.log('you score is average');
    break;
    default:
        console.log("try again, who knows you might pass");
}


