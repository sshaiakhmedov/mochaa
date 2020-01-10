const assert = require('assert');
const {expect} = require('chai');
const {sum, prod, even, isAdult, sortAtoZ, isPalindrome, oddNumber} = require('../index.js');

describe('function sum',()=>{
    it('should variable a equals 10', ()=>{
         assert.equal(sum(3,5),8);
        expect(sum(2,4)).eq(6);
    });

    it('should function sum not equals 0', ()=>{
        assert.notEqual(sum(3,5),0);
    });
});

it('should function prod equals 15', ()=>{
    assert.equal(prod(3,5),15);
});

it('function shall return new array with even number', ()=>{
    assert.deepEqual(even ([4,52,35,6]), [4,52,6]);
});


it('function shall return true if entry is >21', ()=> {
    assert.equal(isAdult(19),true);
    expect(isAdult(19)).true;
});

it('function shall return array sorted in alphabetical order: a to z ', ()=> {
    assert.deepEqual(sortAtoZ(['b', 's', 'e','z','f']), ['b','e','f','s','z'])
});

describe('define is the word palindrom',()=> {
    it('function shall assess is the given word palindrome returning true', () => {
        assert.deepEqual(isPalindrome('nadan'), true)
    });

    it('function shall assess is the given string not palindrome returning false', () => {
        assert.equal(isPalindrome('dadae'), false)
    });

});

describe('is the given number odd or not (true or false)',()=> {
    it('function shall assert is the given number Odd - return true', () => {
        assert.equal(oddNumber(5), true)
    });

    it('function shall assert is the given number Odd-return false', () => {
        assert.equal(oddNumber (6), false);
        expect(oddNumber(6)).false;
    });

});

