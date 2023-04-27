// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yoghurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (product of dairy) {
        console.log(product);
    }
 }
 logDairy();

// Task 2

const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (property of Object.keys(bird)) {
        console.log(`${property}: ${bird[property]}`)
    }
}
birdCan();

// Task 3
function animalCan() {
    for (property in bird){
        console.log(`${property}: ${bird[property]}`)
    }
    
}
animalCan();
