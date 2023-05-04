const {default: TestRunner} = require("jest-runner");
const addFive = require(`./addFive`);

test('returns number plus 5' , ()=>{
    expect(addFive(5)).toBe(10);
})


//instructions for jest 
//1.- write a file with the functions to be tested, make sure to add module.exports = name of the function to make it globally accessible
//2.- create a package.json file by running command npm init -y on the terminal (adding -y will answer yes to all the questions)
//3.- now with the package.json added install jest npm install --save-dev jest once this command runs a dev dependency jest will be added to the package.json 
// as well as a folder called node_modules where all the modules in the project are stored 
//4.-in the package.json file, change the name of the test under the script to "test" 
//5.- create a test file (is this one, this file)
//6.- run the command npm run test on the terminal and will run all the tests added on the folder 