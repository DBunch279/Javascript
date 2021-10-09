var pizza = 
{
    crustType: "",
    sauceType: "",
    cheeses: [""],
    toppings: [""]
};


function pizzaOven(crust, sauce, cheese, topping) 
{
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = topping;

    return pizza;
}
function randomPizza()
{
    var number = Math.random();
    number *= 10;
    if(number >= 0 && number <= 2)
    {
        pizza = {};
        pizza.crustType = "deep dish";
        pizza.sauceType = "tomato";
        pizza.cheeses = ["mozzarella"];
        pizza.toppings = ["pepperoni", "peppers", "olives"];
    }
    if(number >= 2.1 && number <= 6)
    {
        pizza = {};
        pizza.crustType = "thin";
        pizza.sauceType = "none";
        pizza.cheeses = ["cheddar", "greer"];
        pizza.toppings = ["olive oil", "peppers", "black olives"];
    }
    if(number >= 6.1 && number <= 12)
    {
        pizza = {};
        pizza.crustType = "plain";
        pizza.sauceType = "plain";
        pizza.cheeses = ["plain"];
        pizza.toppings = ["plain"];
    }
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3 = pizzaOven("thin", "tomato", ["cheddar", "mozzarella"], ["none"]);
console.log(pizza3);
var pizza4 = pizzaOven("stuffed crust", "traditional", ["ricotta", "cheddar", "mozzarella", "greer", "brie"], ["pepperoni", "more cheese", "sausage", "bacon", "chicken", "red peppers", "olives", "hot sauce"]);
console.log(pizza4);
var pizza5 = randomPizza();
console.log(pizza5);
