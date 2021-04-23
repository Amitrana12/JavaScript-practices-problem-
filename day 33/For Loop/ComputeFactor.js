let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter  your number to find the factors of the number: ",function(number) { 

for(let i = 2; i <= number; i++){
    if(number % i == 0){
        let isPrime=1;
        for(j = 2; j <= i/2; j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1){
            console.log(i);
        }
    }
}
process.exit();
});