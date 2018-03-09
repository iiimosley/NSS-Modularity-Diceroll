
const {assert} = require('chai');

let testArr = [1,2,3];

describe('Array', ()=>{
    describe("typeof", () => {
        it("should be an array", () => {
            assert.typeOf(testArr, 'array', 'we have an array');
        });
    });
    describe('indexOf()', ()=> {
        it("should return -1 when the value is not present", () => {
            assert.equal(-1, testArr.indexOf(4));
        });
    });
    describe("length", () => {
        it("should not be 0", () => {
            assert.notEqual(0, testArr.length)
        });
    });
});



