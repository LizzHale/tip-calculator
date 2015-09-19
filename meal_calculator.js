// Create diner object which represents a single diner
// have the ability to add dishes to diner's meal
function Diner(name) {
    // meal consists of a array of dishes
    this.name = name,
    this.meal = [],
    this.tax = 0.1,
    this.tip = 0.2,
    // Not currently being used -- placeholder in case the tip should be calculated equally amongs diners
    this.mealCost = 0,
};

// Diner object with name and cost properties
function Dish(name, cost) {
    this.name = name,
    this.itemCost = cost,
};

// Total up the cost of all the diner's meals
// for each Diner add the cost of their meal
var bill = function(diners) {
    var total = 0;
    // For each diner in the array of diners, loop through the items in their meal and add to the total cost
    diners.forEach(function (diner, index){
        var cost = 0;
        diner.meal.forEach(function (dish, index){
            console.log(diner.name + ' has ordered ' + dish.name + ' which cost: $' + dish.itemCost.toFixed(2))
            cost += dish.itemCost;
        })
        // Add tax and tip to the cost for the diner
        cost = (cost * diner.tax) + (cost * diner.tip) + cost;
        console.log(diner.name + '\'s total with tax and tip is: $' + cost.toFixed(2));
        // Add the diner's cost to the table's total
        total += cost;
    });
    console.log('The total for the table is: $' + total.toFixed(2));
}

// A few dishes
var poutine = new Dish('poutine', 10);
var breadSticks = new Dish('bread sticks', 3);
var steakFrites = new Dish('steak frites', 15);
var hamburger = new Dish('hamburger', 8);
var meatballs = new Dish('meatballs', 11);
var brusselSprouts = new Dish('brussel sprouts', 7);
var sideSalad = new Dish('side salad', 5);
var soda = new Dish('soda', 2);
var iceCream = new Dish('ice cream', 4.5);

// A few diners
var diana = new Diner('Mike');
var mike = new Diner('Diana');

// Diners' meals
mike.meal = [poutine, sideSalad, soda];
diana.meal = [steakFrites, brusselSprouts, iceCream];

// Create a table
var tableOne = [mike, diana];

// Call function bill for tableOne
bill(tableOne);
