let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(n) {    
   var k = n;
   var flag = 0;
    for(i = 2; i < n; i++)
    { if(k % i == 0)
        flag++;
    }
    if(flag >= 1)
    console.log(n + " is not a prime number");
    if(flag == 0)
    console.log(n + " is a prime number");
    
    process.exit();
});