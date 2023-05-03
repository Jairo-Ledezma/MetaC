const games =['TLOU' , 'RE', 'Overcooked'];


function spread (game1, game2, game3){
    console.log(`my favorite game is ${game1}`);
    console.log(`my second favorite game is ${game2}`);
    console.log(`my third favorite game is ${game3}`);
}

spread(games[0], games[1], games[2]);

console.log(); // printed for clarity in the console

spread(...games);