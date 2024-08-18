class footballPlayer{
    playFootball(){
        console.log("I am playing football!")
    }
}

class striker extends footballPlayer{
    playFootball(){
        super.playFootball()
            console.log("I am good at scoring goals!")
    }
}

class goalKeeper extends footballPlayer{
    playFootball(){
        super.playFootball()
        console.log("I am good at goal keeping!")
    }
}

var ronaldo = new striker();
var buffon = new goalKeeper();

ronaldo.playFootball();
buffon.playFootball();
