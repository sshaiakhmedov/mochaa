function sum (a, b){
    return a + b;
}

function prod (a, b){
    return (typeof a=='number' && typeof b=='number')? a*b : "Use only numbers";
}

module.exports = {sum, prod, isEven, isAdult, sortAtoB, isPalindrome, oddNumber};

/*The function is given a random array arr of numbers .
It shall return a new array arrEven with even numbers only from arr array.*/
function isEven (arr){
   return arr.filter(el=>el%2===0);
}
/*Function assess an input c for entries as:
<0 value
string value
String number value
String number with spaces value, so state whether a person is Adult or not (>18)*/
function isAdult (c){
    return c>18 && c!==/\d\s/? true : false;
}
/*The function is given a random array arr of numbers or string charters.
It shall return the same array sorted in alphabetical or numbers in ascending order.
If any element in array is empty==undefined function shall throw 'Error'*/
function sortAtoB (arr) {
    if (arr.includes(undefined)) throw 'Error';
    return  arr.sort();
}

function isPalindrome (word) {
    return word.split('').reverse().join('')===word? true : false;
}
//The functions receives a value and test: if it is Odd return true and vise versa
function oddNumber (num) {
    return (typeof num!=='string' && num%2!==0)? true : false;
}