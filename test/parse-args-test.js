
const parseArgs = require('../lib/parse-args');
const { assert: { isObject, deepEqual} } = require('chai');

describe('parseArgs()', ()=>{
    it('should be an object with {count:1,sides:6} when no args passed', ()=>{
        isObject(parseArgs([]));
        deepEqual(parseArgs([]), {count:1,sides:6});
    });
    it('should be an object with defined {count,sides} to 2 args passed', () => {
        for (let ct = 1; ct < 10; ct++) {
            for (let sd = 2; sd < 10; sd++) {
                isObject(parseArgs([ct,sd]));
                deepEqual(parseArgs([ct,sd]), { count: ct, sides: sd });
            }
        }
    });
    it('should be an object with a count: 1 & sides defined by a singular argument', ()=>{
        for(let i=2; i<10; i++){
            isObject(parseArgs([i]));
            deepEqual(parseArgs([i]), { count: 1, sides: i });
        }
    });
});