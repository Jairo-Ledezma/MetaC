let bestGames = new Map();

bestGames.set(1, 'TLOU');
bestGames.set(2, 'RE');
bestGames.set(3, 'Overcooked');
bestGames.set(4, 'Star Wars');
bestGames.set(5, 'Jurassic Park');

console.log(bestGames);


let top3 = new Map();
let counter = 1;
for(let value of bestGames.values()){
    if(value.length>5){
        top3.set(counter , value)
        counter++;
    }
    
}

console.log(top3);


let newTop = new Map();
counter = 1;

bestGames.forEach( value=> {
    if (value.length>5){
        newTop.set(counter , value)
        counter++;
    }
})

console.log(newTop);