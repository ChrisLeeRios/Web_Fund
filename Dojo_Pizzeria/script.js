// Create a function called pizzaOven that returns a JavaScript (Pizza) Object.
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza["Crust Type"] = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crustType = ["deep dish", "gluten free", "vegan", "hand tossed"]
var sauceType = ["traditioinal", "bbq", "garlic aoli", "marinara", "white sauce"]
var cheeses = ["mazzarella", "feta", "vegan cheese", "swiss", "cheddar"]
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "chicken"]



function randomPizza() {
    var randCrust = crustType[Math.floor(Math.random() * crustType.length)];
    var randSauce = sauceType[Math.floor(Math.random() * sauceType.length)];
    var randCheeses = [];
    var randToppings = [];

    for (var cheese of cheeses) {
        var choice = Math.floor(Math.random() * 2)
        if (choice === 1) {
            randCheeses.push(cheese)
        }

    }
    for (var topping of toppings) {
        var choice = Math.floor(Math.random() * 2)
        if (choice === 1) {
            randToppings.push(topping)
        }

    }


    return pizzaOven(randCrust, randSauce, randCheeses, randToppings)
}
console.log(randomPizza())

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(p1)
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], and["mushrooms", "olives", "onions"])
console.log(p2)
var p3 = randomPizza()
console.log(p3)



// var pizza = {
//     crustType: ["deep dish", "gluten free", "vegan", "hand tossed"],
//     sauceType: ["traditioinal", "bbq", "garlic aoli", "marinara"],
//     cheeses: ["mazzarella", "feta", "vegan"],
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
//     pizzaOven: function () {
//         console.log(this.crustType);
//         console.log(this.sauceType);
//         console.log(this.cheeses);
//         console.log(this.toppings);
//     }
// }
// pizza.pizzaOven()



// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }

// var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
// console.log(p1)


// var pizza1 = {
//     crustType: ["deep dish", "gluten free", "vegan", "hand tossed"],
//     sauceType: ["traditioinal", "bbq", "garlic aoli", "marinara"],
//     cheeses: ["mazzarella", "feta", "vegan"],
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
//     pizzaOven: function () {
//         console.log(this.crustType[0]);
//         console.log(this.sauceType[0]);
//         console.log(this.cheeses[0]);
//         console.log(this.toppings[0] + " and " + this.toppings[1]);
//     }
// }

// pizza1.pizzaOven()

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }

// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], and["mushrooms", "olives", "onions"])
// console.log(p2)




// var pizza2 = {
//     crustType: ["deep dish", "gluten free", "vegan", "hand tossed"],
//     sauceType: ["traditioinal", "bbq", "garlic aoli", "marinara"],
//     cheeses: ["mazzarella", "feta", "vegan"],
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
//     pizzaOven: function () {
//         console.log(this.crustType[3]);
//         console.log(this.sauceType[3]);
//         console.log(this.cheeses[0] + " and " + this.cheeses[1]);
//         console.log(this.toppings[2] + "," + this.toppings[3] + " and " + this.toppings[4]);
//     }
// }

// pizza2.pizzaOven()

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

// function randomPizza(crustType, sauceType, cheeses, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }
// var crustType = ["deep dish", "gluten free", "vegan", "hand tossed"]
// var sauceType = ["traditioinal", "bbq", "garlic aoli", "marinara"]
// var cheeses = ["mazzarella", "feta", "vegan"]
// var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
// var ri = Math.floor(Math.random() * crustType.length)
// var p3 = randomPizza(crustType[ri], sauceType[ri], cheeses[ri], toppings[ri])
// console.log(p3)

// var pizzaAny = {
//     crustType: ["deep dish", "gluten free", "vegan", "hand tossed"],
//     sauceType: ["traditioinal", "bbq", "garlic aoli", "marinara"],
//     cheeses: ["mazzarella", "feta", "vegan"],
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
//     pizzaOven: function () {
//         console.log(this.crustType[Math.floor(Math.random() * this.crustType.length)]);
//         console.log(this.sauceType[Math.floor(Math.random() * this.sauceType.length)]);
//         console.log(this.cheeses[Math.floor(Math.random() * this.cheeses.length)]);
//         console.log(this.toppings[Math.floor(Math.random() * this.toppings.length)]);
//     }
// }

// pizzaAny.pizzaOven()


function displayIngredient(pizza, ingredient) {
    console.log(pizza[ingredient])
}