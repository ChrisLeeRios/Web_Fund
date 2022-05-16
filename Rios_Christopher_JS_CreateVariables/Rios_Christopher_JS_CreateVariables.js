var RiderHeight = 45;
var RiderAGe = 9;
var HeightMin = 52;
var AgeMin = 10;
if (RiderHeight > 52) {
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}

//Stretch feature 1

if (RiderHeight > HeightMin && RiderAGe > AgeMin) {
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}

//Stretch feature 2

if (RiderHeight > HeightMin) {
    console.log("Get on that ride, kiddo!")
} else if (RiderAGe > AgeMin) {
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year");
}