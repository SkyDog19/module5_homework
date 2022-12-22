'use strict';
/*jshint -W097*/

const arr = [1, 1, 1];

let param = arr[arr.length - 1];

console.log(arr.every(element => element == param));