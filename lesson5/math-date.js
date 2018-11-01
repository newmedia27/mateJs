/*Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/
var a = 10;
var b = 3;
var c = a % b;
console.log(c);

/*Даны переменные a и b. Проверьте, что a делится без остатка на b. 
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.*/

function checkOnDivision(a, b) {
    if (a % b === 0) {
        console.log('Делится' + ' ' + a / b);
    } else {
        console.log('Делится с остатком' + ' ' + a % b);
    }
}

checkOnDivision(6, 2);

/*Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.*/

function differenceModulus(a, b) {
    console.log(Math.abs(a - b) + '-' + Math.abs(b - a));
}

differenceModulus(24, 6);// Надеюсь я правильно понял суть =)

/*Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.*/
let sqrt = Math.sqrt(379);

console.log(Math.round(sqrt));
console.log(Math.round(sqrt * 10) / 10);
console.log(Math.round(sqrt * 100) / 100);


/*Выведите на экран случайное число от 1 до 100.*/

function random(a, b) {
    let rand = a + Math.random() * (a - b);
    rand = Math.round(rand);
    return Math.abs(rand);
}

console.log(random(1, 100));

/*Создайте функцию которая будет находить корни квадратного уровнения: x^2 + 4x + 9 = 0;*/

function quadraticEquation(a,b,c) {
    let d = (b * b) - 4 * a * c;
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    } else {
        console.log('D < 0 and = ' + d);
    }

}

console.log(quadraticEquation(a,b,c));

/*Напишите скрипт, который проверяет, является ли данное число простым
 (простое число - это то, которое делится только на 1 и на само себя).*/

function num(n) {
    let result = 0;
    for (let i = 2; i < n; i++) {

        if (n > 0 && n !== 0 && n % i === 0) {
            console.log('Не простое');
            break;
        } else {
            console.log('Простое');
            result = n;
        }
    }
    return result;
}

console.log(num(1));

/*Напишите скрипт, который найдет все простые числа
 в заданном промежутке. Проверьте его работу на промежутке от 1 до 1000.*/

function numeric(min, max) {

    arr = [];
    if (min === 1) {
        min += 1;
        arr.push(min);
    }
    for (min; min < max; min++) {
        if (num(min) !== 0) {
            arr.push(num(min));
        }

    }
    return arr;

}

// console.log(numeric(1,1000));

/*Заполните массив 10-ю случайными числами. (Подсказка: нужно воспользоваться циклами for или while).*/

function randomValue() {
    arr = [];
    let i = 0;
    while (i < 10) {
        arr.push(random(1, 100));
        i++;
    }
    return arr;
}

// console.log(randomValue());

/*Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.*/
let date = new Date();
console.log(date.getFullYear() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getDay());

/*Выведите на экран текущий месяц словом, по-русски.*/

console.log(date.toLocaleDateString('ru', {month: 'long'}));

/*Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/


function formatDate() {
    let date = new Date();
    let dd = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay();
    let mm = (parseInt(date.getMonth() + 1) < 10) ? '0' + parseInt(date.getMonth() + 1) : parseInt(date.getMonth() + 1);
    let yy = date.getFullYear();
    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return hh + ':' + min + ':' + sec + ' ' + dd + '.' + mm + '.' + yy;
}


console.log(formatDate());

/*Узнайте, какой был день 7-го января 2015 года.*/

let oldDate = new Date(2015, 1, 7);
console.log(oldDate.getDay());

/*Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.*/

console.log(date.getTime() / (1000 * 60));

/*Напишите метод, которая преобразует секунды в дни, часы, минуты. Например: 10..0 секунд это 3 дня, 23 часа, 46 минут, 25 секунд.*/

function days(sec) {

    let ss = 0;
    let mm = 0;
    let hh = 0;
    let dd = 0;
    if (sec / 60 >= 1) {
        ss = sec % 60;
        mm = Math.floor(sec / 60);
    }
    if (mm >= 60) {
        hh = Math.floor(mm / 60);
        mm = mm % 60;
    }
    if (hh >= 24) {
        dd = Math.floor(hh/24);
        hh = hh % 24;
    }
    return [dd, hh, mm, ss];
}

console.log(days(128812));