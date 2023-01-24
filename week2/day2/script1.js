const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};



userCart["lastname"] = "smith";
console.log(userCart);

userCart["username"]= "TOM";
console.log(userCart);

userCart["prices"]["pear"]=userCart["prices"]["pear"]* 1.17;
userCart["prices"]["pear"]*=1.17;
console.log(userCart);

const userChoice= prompt("what fruit to you want").toLowerCase();
console.log(userChoice);

userCart["prices"]["pear"];
userCart["prices"]["apple"];
userCart["prices"]["banan"];

const value= userCart["prices"][userChoice];
console.log(`the price of ${userChoice} is ${value} dollars`);


let x = 5;
let y = 7;
if(x>y){
    console.log("x is the biggest number");
}
else{
    console.log("y is the biggest number");
}

const newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());
if(newDog == "Chihuahua"){
    console.log("i love chihahuah")
}
else{
    console.log("j'aime les chat")
}

let number = prompt("choose a number");
if (numbers % 2 == 0){
    console.log("x est un nombre pair")
}
else{
    console.log("x est un nombre impair")
}
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let nbr = users.length
console.log(length);
  if (nbr == 0) {
    console.log("no one is online")
 } else if (nbr == 1)  {
     console.log(`${users[0]} is online`)
 } else if (nbr == 2) {
    console.log(`${users[0, 1]} is online`)
}
  else if (nbr > 2) {
    console.log(`${users[0, 1]} and 2 more are online`)
 }

