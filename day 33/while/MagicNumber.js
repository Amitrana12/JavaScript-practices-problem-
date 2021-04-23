console.log("choose a numer between 1 and 100");
const readline = require('readline-sync');
var lowest = 1;
var highest = 100;
var mid = 50;
var flag = 0;
while (lowest < highest) {
    console.log("enter 1 if number is b/w "+ lowest +" and " + mid)
    console.log("enter 2 if number is b/w "+ mid +" and " + highest)
    console.log("enter 3 if number is equal to "+ mid)
    let value = readline.questionInt();
    switch (value) {
        case 1:
          highest = mid - 1;
        break;
        case 2:
          lowest = mid + 1;
        break;    
        case 3:
          flag++;
        break;
        default:
          text = "oops! wrong choice";
        break;         
    }
    mid = parseInt((lowest + highest)/2);
    if(flag == 1){
        break;
    }
}
console.log("your value is = " + mid)