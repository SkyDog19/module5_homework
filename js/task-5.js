'use strict';
/*jshint -W097*/

const arr = [1, 5, 33, 666, 43];

console.log(`В массиве всего ${arr.length} элементов`);

arr.forEach((item, index) => {
    console.log(`Под индексом ${index} элемент ${item}`);
});