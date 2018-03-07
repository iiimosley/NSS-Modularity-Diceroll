'use strict';

const { randomInt } = require('./math')

const toDiceNotation = (ct, sides) => `${ct}d${sides}`;
const roll = (diceNote) => {
    let diceArr = diceNote.split('d');
    let lower = +diceArr[0];
    let upper = (+diceArr[0] * +diceArr[1]);
    return randomInt(lower, upper);
};

module.exports = {roll, toDiceNotation}
