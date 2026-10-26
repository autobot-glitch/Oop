const foods = [
    {name: "Burger", price: 120},
    {name: "Fries", price: 60},
    {name: "Pizza", price: 250},
    {name: "Sandwitch", price: 80},
    {name: "Hotdog", price: 50},
];

foods.pop()
console.log("After pop:", foods);


const cheapFoods = foods.filter(
    food => food.price < 100);
console.log("Foods below 100:", cheapFoods);