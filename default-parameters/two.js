class WithDefaultParameter{
    constructor(num1 = 2, num2 = 4, num3 = 6, string1 = "Result:", bool1 = true){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect!";
    }
}

var better = new WithDefaultParameter();
better.calculate();