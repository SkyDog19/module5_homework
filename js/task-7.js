'use strict';
/*jshint -W097*/

const arr = [1, 5, 4, 6, 9, 0, 'string', 'string-two'];

let even = [];
let odd = [];
let zero = [];
let notNumbers = [];

arr.forEach(item => {
    if (item === 0) {
        zero.push(item);
    } else if (item % 2 == 0 && item === Number(item)) {
        odd.push(item);
    } else if (item % 2 != 0 && item === Number(item)) {
        even.push(item);
    } else if (item !== Number(item)) {
        notNumbers.push(item);
    }
});

console.log(`Количество четных символов : ${even.length}, количество нечетных символов : ${odd.length}, количество нулей : ${zero.length}, количество строк ${notNumbers.length}`);
