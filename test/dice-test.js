
const { assert: {isFunction, isNumber, isString, isNotNaN, deepEqual, oneOf} } = require('chai');
const { roll, toDiceNotation } = require('../lib/dice');

describe('dice module', ()=>{
    describe('roll', ()=>{
        it('should be a function', ()=> {
            isFunction(roll);
        });
        it('should return a number', ()=>{
            for (let i = 1; i<10; i++){
                let diceNote = `${i}d6`
                let rollArr = Array.from(Array(60).keys());
                rollArr.map(x=>x+1)
                oneOf(roll(diceNote), rollArr);
            }
        });
    });
    describe('diceNotation', ()=>{
        it('should be a string', ()=>{
            for (let ct = 1; ct < 10; ct++) {
                for (let sd = 2; sd < 10; sd++) {
                    isString(toDiceNotation(ct, sd));
                    deepEqual(toDiceNotation(ct, sd), `${ct}d${sd}`);
                }
            }
        });
    });
});