function Love_Calculator(name_1, name_2){
    var chance = Math.floor(Math.random(name_1, name_2)* 100) +1;
    console.log(name_1 + "'s and " + name_2 + "'s compatibility rating is: " + chance + "%");
}

console.log("Welcome to Love Calculator!");
console.log("Enter both your name and someone else's name to see your compatibility rating out of 100")
var name_1 = console.prompt("What is your name?");
var name_2 = console.prompt("What is the other person's name?");
Love_Calculator(name_1, name_2)