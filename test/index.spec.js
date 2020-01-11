const assert = require('assert');
const {expect} = require('chai');
const {sum, prod, isEven, isAdult, sortAtoB, isPalindrome, oddNumber} = require('../index.js');

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
    expect(prod(4,3)).equal(12);
    // expect(prod('t',2).equal("Use only numbers")
});

it('function shall return new array with even number', ()=>{
    assert.deepEqual(isEven ([4,52,35,6]), [4,52,6]);
    // expect(isEven([2,4,'t',6,'tr',3]).deep.equal([2,4,6]))
});

/*The Unit test assess the input c for entries as:
c>18
c<18
String, string number value or string number value with spaces, to state whether a person is Adult or not (>18)*/
it('function shall return true if a Person age c>18 and false if c<18', ()=> {
    assert.equal(isAdult(19),true);
    assert.equal(isAdult(16), false);
    assert.deepEqual(isAdult(' 22 '), true);
    expect(isAdult(19)).true;
    expect(isAdult(16)).false;
    expect(isAdult('er')).false;
});

/*This Unit test is given a random array arr of numbers or string charters.
It shall return the same array sorted in alphabetical or numbers in ascending order.
If any element in array is empty==undefined function shall throw 'Error'*/

it('function shall return array sorted in alphabetical order(a-z) or numbers in ascending order(0-9)', ()=> {
    assert.deepEqual(sortAtoB(['b', 's', 'e','z','f']), ['b','e','f','s','z']);
    assert.deepEqual(sortAtoB([4,3,2,1,5]), [1,2,3,4,5]);
   /* assert.deepStrictEqual(sortAtoB([,3,2,1,5]), undefined, Error); //cant find the right assertion method for Error*/
    expect(sortAtoB(['b', 's', 'e','z','f'])).deep.equal(['b','e','f','s','z']);
    // expect(sortAtoB([,,4,2]).messageerror)
    // expect(sortAtoB([5,3,2,7,3])).deep.equal([2,3,3,5,7])
});

describe('define is the word palindrom',()=> {
    it('function shall assess is the given word palindrome returning true', () => {
        assert.deepEqual(isPalindrome('nadan'), true);
        expect(isPalindrome('mamam')).true;
    });

    it('function shall assess is the given string not palindrome returning false', () => {
        assert.equal(isPalindrome('dadae'), false);
        expect(isPalindrome('dadss')).false;
    });

});

describe('is the given number odd or not (true or false)',()=> {
    it('function shall assert is the given number Odd - return true', () => {
        assert.equal(oddNumber(5), true);
        expect(oddNumber(11)).true;

    });

    it('function shall assert is the given number Odd-return false', () => {
        assert.equal(oddNumber (6), false);
        expect(oddNumber(6)).false;
        expect(oddNumber('t')).false;
    });

});

