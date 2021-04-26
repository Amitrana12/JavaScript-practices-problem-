let array=new Array();
for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log(array)
let lengthArray=array.length;
console.log(lengthArray);

let largest1=0;
let largest2=0;
let smallest=array[0];
let smallest2=array[0];

for(let i=0;i<lengthArray;i++){
    if(array[i]>largest1){
        largest1=array[i];
    }
    if(array[i]<smallest){
        smallest=array[i];
    }
}
for(let j=0;j<lengthArray;j++){
    if(array[j]>largest2 && array[j]!=largest1){
        largest2=array[j];
    }if(array[j]<smallest2 && array[j]!=smallest){
        smallest2=array[j];
    }

}
console.log("First largest number is:"+largest1);
console.log("First smallest number is:"+smallest);
console.log("Second largest number:"+largest2);
console.log("Second smallest number:"+smallest2);


/*
2. Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.
*/

//Sorting an array
let array=new Array();
for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log("Array before sorting");
console.log(array);
array.sort();
console.log("Array after sorting");
console.log(array);
console.log("second Largest Number:"+array[8]);
console.log("second smallest number:"+array[1]);
