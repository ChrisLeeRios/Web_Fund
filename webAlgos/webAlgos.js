// WEEK 1 DAY 2

// Lesson 1
var a = 25;
a = a - 13;
console.log(a / 2);

a = "hello";
console.log(a + " hello");
//  6
// "hello hello"


// Lesson 2
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);
// 0
// 4
// 8
// "outside of the loop 12"


// Lesson 3
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
// "the current sum is: 2"
// "the current sum is: 5"
// "the current sum is: 10"
// "the total is: 10"


// Week 1 Day 3
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        countPositives++
    }
}

console.log("there are " + countPositives + " positive values");
// "there are 4 positive values"


//Week 1 Day 4
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
//"Not a pal-indrome"
//"Pal-indrome"


// Week 1 day 5
var arr = ["a", "b", "c", "d", "e"];
var temp = []
for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
}
arr = temp;
console.log(arr)

function Reverse(array) {
    var temp = 0;
    for (var i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

var array = [1, 2, 3, 4, 5, 6];
array = Reverse(array);

console.log(array);



// WEEK 2 DAY 1
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.
function d6() {
    var roll = Math.random();
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(roll * (max - min) + min);
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Using the following array, write a function that will answer all of our questions by randomly choosing a response
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function helpMe(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

console.log("Your answer is: " + helpMe(lifesAnswers))


// WEEK 2 DAY 2

var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// 1. console.log the pokémon objects whose id is evenly divisible by 3

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 === 0) {
        console.log(pokémon[i].name);
    }
}

// 2. console.log the pokémon objects that have more than one type
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1) {
        console.log(pokémon[i].name);
    }
}

// 3. console.log the names of the pokémon whose only type is "poison"
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[0] === "poison" && pokémon[i].types.length === 1) {
        console.log(pokémon[i].name);
    }
}

// 4. console.log the first type of all the pokémon whose second type is "flying"
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] === "flying") {
        console.log(pokémon[i].types[0]);
    }
}

// BONUS CHALLENGE: console.log the reverse of the names of the pokémon whose only type is "poison"
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[0] === "poison" && pokémon[i].types.length === 1) {


        var newName = pokémon[i].name;
        console.log(newName)
    }
}
function reverseString(str) {

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString(newName));


// Week 2 day 4
// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

var arr2d = [[2, 5, 8],
[3, 6, 1],
[5, 7, 7]];

function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var k = 0; k < arr2d[i].length; k++) {
            if (arr2d[i][k] === value) {
                return true
            }
        }
    }
    return false
}
console.log(isPresent2d(arr2d, 7))


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++) {
        for (var k = 0; k < arr2d[i].length; k++) {
            flat.push(arr2d[i][k])
        }
    }
    return flat;
}
console.log(flatten(arr2d))


// theory 

// while(arr2d.length >= 0)






// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// im testing things