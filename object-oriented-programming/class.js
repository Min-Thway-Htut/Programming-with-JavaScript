const bicycle = {
    bell: function(){
        return "Ring, ring! Watch out please!"
    }
}

const door = {
    bell: function(){
        return "Come here please!"
    }
}

function ringTheBell(thing){
    console.log(thing.bell());
}

ringTheBell(door);

console.log("abc".concat("def"));
console.log(["abc"].concat(["def"]));
console.log(["abc"]+["def"]);