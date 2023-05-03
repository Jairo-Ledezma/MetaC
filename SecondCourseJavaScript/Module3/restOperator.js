// helps to destructure arrays and objects can also be used in functions 
const games =['TLOU' , 'RE', 'Overcooked', 'Zelda', 'Star Wars', 'Jurassic Park', 'Final Fantasy'];

const [first, second, third, ...moreGames] = games;

console.log(moreGames);
console.log(first);
console.log(second);
console.log(third);
console.log();//printed for clarity on the console


function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item=> Math.round(taxRate * item));
}


console.log(addTaxToPrices(1.16 , 100, 200, 300));
console.log();//printed for clarity on the console

// transforming 2 arrays into 1 with rest operator 

const horrorGames =['RE' , 'TLOU', 'Days Gone'];
const rpgGames = ['Final Fantasy' , 'Grandia' , 'Kingdome Hearts'];

const horrorAndRpgGames = [...horrorGames , ...rpgGames];

console.log(horrorAndRpgGames);
console.log();//printed for clarity on the console

//Joining objects with spread

const xBox = {name: 'X Box' } ;
const playStation5 = {name1 : 'Playstation 5'};

const consoles = {...xBox, ...playStation5};

console.log(consoles);
console.log();//printed for clarity on the console

// adding memebers to an array without push method

let actionGames = ['Uncharted' , 'COD' ];

actionGames = [...actionGames , 'God of War'];

console.log(actionGames);
console.log();//printed for clarity on the console

//converting a string into an array with spread

let greeting ='buenos dias gente';
let greetingArray = [...greeting];
console.log(greetingArray);
console.log();//printed for clarity on the console

//copying an array using rest operator

let fruits = ['apple' , 'orange' , 'strawberry'];
let fruits1 = [...fruits];

console.log(fruits);
console.log(fruits1)
console.log();//printed for clarity on the console

//copying an object using rest operator 

const play5 = {
    color: 'black',
    size: 'huge',
    pretty: false
}

const anotherPlay5 = {...play5}

console.log(play5);
console.log(anotherPlay5);
console.log();//printed for clarity on the console



function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);