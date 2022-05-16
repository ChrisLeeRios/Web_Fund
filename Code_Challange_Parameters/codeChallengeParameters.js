function greet(person) {
    if (person == "Anakin") {
        console.log("Good day, " + person)
    }
}
greet("Anakin");

//Level 2
function greet(person, time) {
    if (person == "Anakin") {
        console.log("Good day, " + person + ". It is " + time + ".");
    }
}
greet("Anakin", 12);

//Level 3
function greet(person, time) {
    if (person == "Anakin") {
        console.log("Good day, " + person + ". It is " + time + ".");
    } else {
        if (person == "Count Dooku") {
            console.log("Good day, " + person + ". It is " + time + ". " + "I'm coming for you, Dooku!");
        }
    }
}
greet("Anakin", 12);
greet("Count Dooku", 12);