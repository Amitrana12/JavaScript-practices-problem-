let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number ",function(number) {    
let array=new Array();
for(let i=2;i<=number;i++){
    if(number%i==0){
        let isPrime=1;
        for(j=2;j<=i/2;j++){
            if(i%j==0){
                isPrime=0;
                break;
            }
        }
        if(isPrime==1){
            array.push(i);
        }
    }
}
console.log("Printing the prime factors of an number");
console.log(array);
process.exit();
});