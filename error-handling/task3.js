function findLetter(word, match){
    var condition1 = typeof(word) == 'string' && word.length >= 3;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 && condition2){
       for (var i = 0; i < word.length; i ++){
        if(word[i] == match){
            console.log("Found the ", match, " at",i);
        }else{
            console.log("--No match found at ")
        }
    }
}else{
    console.log("Please pass correct arguments to the function")
}
}

findLetter("Cat","t");