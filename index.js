function sum (a, b){
    return a + b;
}

function prod (a, b){
    return a * b;
}
module.exports = {sum, prod, isEven, isAdult, sortAtoB, isPalindrome, oddNumber};

/*The function is given a random array arr of numbers .
It shall return a new array arrEven with even numbers only from arr array.*/
function isEven (arr){
    let arrEven=[];
    arrEven=arr.filter(el=>el%2==0);
    return arrEven;
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

function oddNumber (num) {
    return num%2!==0? true : false;
}