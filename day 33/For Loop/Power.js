let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(n) {    
    for(i = 1; i <= n; i++)
    {
        result = 2 * i;
        console.log("2 x "+ i +" = "+ result)
    }
    process.exit();
});