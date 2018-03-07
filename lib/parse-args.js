'use strict';

module.exports = (args) => {
    if (args.length === 0) {
        return {
            count: 1,
            sides: 6
        }
    } else if (args.length === 1 && args[0]%1===0){
        return {
            count: 1,
            sides: +args[0]
        }
    } else if (args.length > 2) {
        console.log('Please enter up to 2 valid numbers');
        process.exit();
    }  
    else if (args[0]%1 === 0 && args[1]%1 === 0) {
        return {
            count: +args[0],
            sides: +args[1]
        }
    } else {
        console.log('Please enter a valid number');
        process.exit();
    }
}