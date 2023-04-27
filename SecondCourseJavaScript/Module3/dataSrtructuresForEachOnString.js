
//for each loop
const games = ['TLOU' , 'RE' , 'Uncharted' , 'Overcooked' , 'Jurassic Park'];

function apendIndex(game , index){
    console.log(`${index + 1}. ${game}`)
}

games.forEach(apendIndex);


console.log() // written for clarity on the console 
// for each loop with function declared on actual loop

const videoGames = ['TLOU' , 'RE' , 'Uncharted' , 'Overcooked' , 'Jurassic Park'];

videoGames.forEach(function(videoGame , index){
    console.log(`${index + 1}. ${videoGame}`)
});

console.log() // written for clarity on the console 
//arrow function 

const favGames = ['TLOU' , 'RE' , 'Uncharted' , 'Overcooked' , 'Jurassic Park'];
favGames.forEach((game,index)=>console.log(`${index + 1 }. ${game}`))

console.log() // written for clarity on the console


// filter method

const gamesPlayed = ['TLOU' , 'RE' , 'Uncharted' , 'Overcooked' , 'Jurassic Park'];

gamesPlayed.filter((game,index)=>{
    if(game.charAt(0).toLowerCase()=='t' || game.charAt(0).toLowerCase()=='o'){
        console.log(`${index +1}. ${game}`)
    }
}) // this will filter and print all the games that start with t or o