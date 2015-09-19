// Create diner object which represents a single diner
// have the ability to add dishes to diner's meal
function Diner(name) {
    // meal consists of a array of dishes
    this.name = name,
    this.meal = [],
    this.tax = 0.1,
    this.tip = 0.2;
    this.mealCost = 0;
};

function Dish(name, cost) {
    this.name = name;
    this.itemCost = cost;
};

// Total up the cost of all the diner's meals
// for each Diner add the cost of their meal
var bill = function(diners) {
    var total = 0;
    diners.forEach(function (diner, index){
        var cost = 0;
        diner.meal.forEach(function (dish, index){
            console.log(diner.name + " has ordered " + dish.name + " which cost: $" + dish.itemCost.toFixed(2))
            cost += dish.itemCost;
        })
        cost = (cost * diner.tax) + (cost * diner.tip) + cost;
        console.log(diner.name + "'s total with tax and tip is: $" + cost.toFixed(2));
        total += cost;
    });
    console.log("The total for the table is: $" + total.toFixed(2));
}

// A few dishes
var poutine = new Dish("poutine", 10);
var breadSticks = new Dish("bread sticks", 3);
var steakFrites = new Dish("steak frites", 15);
var hamburger = new Dish("hamburger", 8);
var meatballs = new Dish("meatballs", 11);
var brusselSprouts = new Dish("brussel sprouts", 7);
var sideSalad = new Dish("side salad", 5);
var soda = new Dish("soda", 2);
var iceCream = new Dish("ice cream", 4.5);

var diana = new Diner('Mike');
var mike = new Diner('Diana');

mike.meal = [poutine, sideSalad, soda];
diana.meal = [steakFrites, brusselSprouts, iceCream];

var tableOne = [mike, diana];
bill(tableOne);
