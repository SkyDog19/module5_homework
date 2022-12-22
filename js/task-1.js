'use strict';
/*jshint -W097*/

const question = +prompt('Введите число', '');

// console.log(typeof question); //проверка, что унарный плюс преобразовал к типу данных number

if (question == '') {
    console.log('Вы ничего не ввели');
} else if (question === Number(question) && question % 2 == 0) {
    console.log('число четное');
} else if (question === Number(question) && question % 2 != 0) {
    console.log('число нечетное');
} else if (question !== Number(question)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (question === isNaN(question)) {
    console.log('isNan');
}