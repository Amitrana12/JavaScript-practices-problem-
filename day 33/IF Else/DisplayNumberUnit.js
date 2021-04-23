let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {
if(value==1 && value<=9)
console.log("unit");
if(value>=10 && value<=99)
console.log("Ten");
if(value>=100&& value<=999)
console.log("Hundread");
if(value>=1000 && value<=9999)
console.log("Thousand");
process.exit();
}); 