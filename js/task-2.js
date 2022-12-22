'use strict';
/*jshint -W097*/

let x = 'hghg';

if (x === Number(x)) {
    console.log('x - число');
} else if (x === String(x)) {
    console.log('x - строка');
} else if (x === Boolean(x)) {
    console.log('x - boolean');
} else {
    console.log('Тип x не определен');
}