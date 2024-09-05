// join arrays, objects using the rest operator

const fruits = ['apple','pear','plum']
const berries = ['blueberry','strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries)

// join objects 

const flying = {wings: 2}
const car = {wheels: 4}
const flyingCar = {...flying,...car}
console.log(flyingCar)

// add new members to arrays without using the push() method

let veggies = ['onion','parsley'];
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)

// convert a string to an array using the spread operator

const greeting = "Hello"
const arrayOfChars = [...greeting]
console.log(arrayOfChars)

// copy either an array or an object into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201
console.log(car1,car2)


const fruits1 = ['apples','oranges']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)
