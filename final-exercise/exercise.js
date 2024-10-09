const dishes = [
    {name: 'Italian pasta', price: 9.55},
    {name: 'Rice with veggies', price: 8.65},
    {name: 'Chicken with potatoes', price: 15.55},
    {name: 'Vegetarian Pizza', price: 6.45}
];

function displayDishPrices(includeTax){
    if(includeTax){
        console.log("Prices with 20% tax:");
        dishes.forEach(dish => {
            const finalPrice = (dish.price * 1.2).toFixed(2);
            console.log(`Dish: ${dish.name} Price (incl.tax): $ ${finalPrice}`);
        });
    }else{
        console.log("Prices without tax:");
        dishes.forEach(dish => {
            const originalPrice = dish.price.toFixed(2);
            console.log(`Dish: ${dish.name} Price (incl.tax): $ ${originalPrice}`);
        })
    }
}

displayDishPrices(true);
console.log('');
displayDishPrices(false);