'use strict';
/*jshint -W097*/

const myMap = new Map([ //создаю произвольный ассоциативный массив Map
    ['name', 'SkyDog'],
    ['id', '21'],
    ['course', 'SkillFactory']
]);

myMap.set('dream', 'good job'); //добавляю ключ-значение при помощи метода set

for (let key of myMap.keys()) {
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
};