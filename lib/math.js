'use strict';

module.exports.randomInt = (lower, upper) => Math.floor((Math.random()*upper)+(+lower));

module.exports.coinToss = () => {
    let coinFlip = Math.floor((Math.random()*2)+1);
    if (coinFlip === 1) {
        return "heads"
    } else {
        return "tails"
    }
}