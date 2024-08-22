// object is not iterable

// const car = {
  //  speed: 10,
    // color: "blue"
    // }

// for(prop of car){
   // console.log(prop);
// }

// arrays are iterable

const colors = ['red', 'green', 'blue']
for (var color of colors ){
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3));

const car4 = {
    speed: 400,
    color: "black"
}
console.log(Object.entries(car4));


var clothingItem = {
    price: 50,
    color: "pink",
    material: "cotton",
    season: "summer"
}

for (const key of Object.keys(clothingItem)){
    console.log(key, clothingItem[key])
}

function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5){
        dynamicKey = "speed";
    }else{
        dynamicKey = "color";
    }

    var drone = {
        speed : 15,
        color : "orange"
    }

    console.log(drone[dynamicKey])
}

testBracketsDynamicAccess();