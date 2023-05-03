//allows you to pass an array's arguments one by one without traversing it in a loop 

const games = ['RE' , 'RE' , 'RE' , 'TLOU' , 'TLOU' , 'TLOU','Overcooked', 'Overcooked' , 'Overcooked'];

const uniqueGames = new Set(games);

console.log(uniqueGames);