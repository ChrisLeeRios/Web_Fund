//How do we know we need a loop here? 
//its because everytime a condition is met (running 2 miles) something happnss (candy given) up to a limit (6 miles)
//What's the starting point of the loop?
//0 miles
//When should the loop stop?
//6 miles
//How will it know to stop?
//By making the variable that represents miles ran < 6 in the for loop
//What's the incrementing for each iteration of the loop?
//2
//var milesRan var candyGiven var speedMin var runnerSpeed
var candyGiven = 0
var speedMin = 5.5
var runnerSpeed = 6
var milesRan = 0
for (var milesRan = 0; milesRan < 6; milesRan += 2) {
    candyGiven++
}
console.log(milesRan)
console.log(candyGiven)
//Stretch feature 1
for (var milesRan = 0; milesRan < 6; milesRan += 2) {
    if (runnerSpeed > speedMin) {
        candyGiven++
    }
}
console.log(milesRan)
console.log(candyGiven)