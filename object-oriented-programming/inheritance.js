var goatsOfFootball = {
    winChampionLeague : true,
    winBallonDor : true,
    winNationalTrophy: true,
}

var Ronaldo = Object.create(goatsOfFootball);
console.log("Did Ronaldo win UCL? ", Ronaldo.winChampionLeague );
console.log("Did Ronaldo win Ballon d'or? ", Ronaldo.winBallonDor );
console.log("Did Ronaldo win National Trophy?", Ronaldo.winNationalTrophy);

var Ronney = Object.create(goatsOfFootball);
Ronney.winBallonDor = false;
console.log("Did Ronney win UCL?", Ronney.winChampionLeague);
console.log("Did Ronney win Ballon d'or?", Ronney.winBallonDor);
console.log("Did Ronney win National Trophy?", Ronney.winNationalTrophy);