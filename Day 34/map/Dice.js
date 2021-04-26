let map = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let valuecount = 0;
while(valuecount < 10){
    let dice = Math.floor(Math.random() * 10) % 6 + 1;
    valuecount = map.get(dice);
    map.set(dice, ++valuecount);
}
console.log(map);
console.log("Minumim dice count:"+Math.min(...map.values()));
console.log("Maximum dice value:"+Math.max(...map.values()));
