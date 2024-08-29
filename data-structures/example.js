// for each method


const fruits = ["apple", "bananna", "kiwi"]
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex);

const animals = ["dog", "cat", "snake"];
animals.forEach(function(animal, index){
    console.log(`${index}. ${animal}`)
})

// filter() method

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// map() method

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})