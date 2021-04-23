let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number",function(number) {    
    let i=0;
while(i<number){
    let power=2**i;
    i++;
    console.log("2 ^ "+ i +" = "+power);
    if(power==256){
        break;
    }
}
    process.exit();
});