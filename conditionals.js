const raining = false; 
const cold = true;
if (raining) {console.log("Remember your umbrella!");} if (cold) {console.log("Make sure to wear your scarf.");} console.log("Now you are ready to go outside!");

const frigid = false;
if (frigid) {console.log("Please wear a scarf!");} else {console.log("short sleeves will do");}

const temperature = -1;
if (temperature < 0) {console.log("Make sure you wear your scarf.");} else if (temperature < 15) {console.log("You will need long sleeves.");} else {console.log("Short sleeves are fine. Enjoy the outdoors!");} console.log("Now, you are ready to go outside!"); 

const isCitizen = true;
const age = 26;
if (isCitizen && age > 18) {console.log("You are eligible to vote.")}

if (temperature < -40 || temperature > 40) {console.log("Maybe going outside isn't a great idea...");}

if(!raining) {console.log("Leave your umbrella at home!");}