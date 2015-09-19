// Create diner object which represents a single diner
// have the ability to add dishes to diner's meal
function Diner() {
    // meal consists of a array of dishes
    this.name = null,
    this.meal = [],
    this.tax = 0.1,
    this.tip = 0.2;
    this.mealCost = function (){
        var cost = 0;
        this.meal.forEach(function (dish, index){
            console.log("This is the cost right now " + cost);
            cost += dish.itemCost;
        });
        cost = (cost * this.tip) + (cost * this.tip) + cost;
        return cost;
    };
};

function Dish(cost) {
    this.itemCost = cost;
};

// Total up the cost of all the diner's meals
// for each Diner add the cost of their meal
var bill = function(diners) {
    var total = 0;
    diners.forEach(function (diner, index){
        console.log("The total for " + diner.name + " is: " + diner.mealCost());
        total += diner.mealCost();
    });
    console.log("The total for the table is " + total);
    return total;
}

// A few dishes
var poutine = new Dish(10);
var breadSticks = new Dish(3);
var steakFrites = new Dish(15);
var hamburger = new Dish(8);
var meatballs = new Dish(11);
var brusselSprouts = new Dish(7);
var sideSalad = new Dish(5);
var soda = new Dish(2);
var iceCream = new Dish(4.5);

var diana = new Diner();
var mike = new Diner();

mike.name = 'Mike';
diana.name = 'Diana';
mike.meal = [poutine, sideSalad, soda];
diana.meal = [steakFrites, brusselSprouts, iceCream];

var tableOne = [mike, diana];
bill(tableOne);
