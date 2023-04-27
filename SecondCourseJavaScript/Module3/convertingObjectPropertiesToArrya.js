const jairo = {
    moron : true,
    asshole: true,
}

const result = [];

const jairoKeys = Object.keys(jairo);

jairoKeys.forEach(key=>{
    result.push(key , jairo[key])
})

console.log(result);





