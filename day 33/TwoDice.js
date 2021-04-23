//Add two Random Dice Number and Print the Result
let value1 = Math.floor(Math.random() * 10) % 6 + 1;
let value2 = Math.floor(Math.random() * 10) % 6 + 1;
let result = value1 + value2;
console.log("Addition of two random dice numbers "+ value1 +"+"+ value2 +"::= " + result);