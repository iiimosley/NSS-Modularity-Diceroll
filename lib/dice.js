'use strict';

const { randomInt, coinToss } = require('./math')

const toDiceNotation = (ct, sides) => `${ct}d${sides}`;

const roll = (diceNote) => {
    if (diceNote === '1d2'){
        return coinToss();
    } else {
        let diceArr = diceNote.split('d');
        let rollCt = +diceArr[0];
        let sides = +diceArr[1];
        let rollSum = 0;
        for (let i = 0; i < rollCt; i++) {
            rollSum += randomInt(1, sides);
        }
        return rollSum
    }
};

module.exports = {roll, toDiceNotation}
