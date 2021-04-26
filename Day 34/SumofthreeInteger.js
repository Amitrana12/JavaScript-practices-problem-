let numbers=[1,2,3,4,5,6,7,-1,-2,-3,-4,-9];

for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        for(let k=j+1;k<numbers.length;k++){
            if(numbers[i]+numbers[k]+numbers[j]==0){
                console.log(numbers[i]+","+numbers[j]+","+numbers[k]);
            }
        }
    }
}