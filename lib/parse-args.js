'use strict';

module.exports = (args) => {
    if (args.length > 2 || Math.sign(args[0]) === -1 || Math.sign(args[1]) === -1 || args[0]==="--rules") {
        console.log('Please enter up to 2 valid numbers: diceroll [number of rolls] [number of sides]\nIf rolls=1 & sides=2: a coin toss will return either "heads" or "tails"\nIf 1 value entered: dice rolls once and value is number of sides\nIf no values entered, dice rolls once with 6 sides');
        process.exit();
    } else if (args.length === 1 && args[0] < 2 || args.length === 2 && args[1] < 2){
        console.log('Please enter a number of sides greater than 1');
        process.exit();
    } 
    else if (args.length === 2 && args[0]<1) {
        console.log('Please enter a number of rolls greater than or equal to 1');
        process.exit(); 
    } else if (args[0] === "--flip"){
        return {
            count: 1,
            sides: 2
        }
    }
    else if (args.length === 0) {
        return {
            count: 1,
            sides: 6
        }
    } else if (args.length === 1 && args[0]%1===0){
        return {
            count: 1,
            sides: +args[0]
        }
    } else if (args[0]%1 === 0 && args[1]%1 === 0) {
        return {
            count: +args[0],
            sides: +args[1]
        }
    } else {
        console.log('Please enter a valid command\ntype --rules for further instruction');
        process.exit();
    }
}