function sum (a, b){
    return a + b;
}

function prod (a, b){
    return a * b;
}
module.exports = {sum, prod, even, isAdult, sortAtoZ, isPalindrome, oddNumber};


function even (arr){
    let arrEven=[];
    arrEven=arr.filter(el=>el%2==0);
    return arrEven;
}

function isAdult (c){
    return c>18? true : false;
}

function sortAtoZ (arr) {
    return arr.sort();
}

function isPalindrome (word) {
    return word.split('').reverse().join('')===word? true : false;
}

function oddNumber (num) {
    return num%2!==0? true : false;
}