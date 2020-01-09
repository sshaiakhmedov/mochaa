const assert = require('assert');
const {sum, prod} = require('../index.js');

describe('function sum',()=>{
    it('should variable a equals 10', ()=>{
        assert.equal(sum(3,5),8);
    });

    it('should function sum not equals 0', ()=>{
        assert.notEqual(sum(3,5),0);
    });
});



it('should function prod equals 15', ()=>{
    assert.equal(prod(3,5),15);
});
