let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(number) {    
    let factorial=1;
    for(let i=1;i<=number;i++){
        factorial *= i;
    }
    console.log("Factorial of number "+number+" is:"+factorial);
    process.exit();
});