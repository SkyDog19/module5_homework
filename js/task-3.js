'use strict';
/*jshint -W097*/

const hi = "hello";

function getReverse(str) {
    const oneOperation = str.split(""); //превратил строку в массив
    const twoOperation = oneOperation.reverse(); //перевернул значения массива
    const threeOperation = twoOperation.join(''); //передал пустую строку, чтоб не было разделителя(запятой) и превратил массив в строку
    console.log(threeOperation);
}

getReverse(hi);