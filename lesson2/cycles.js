/*1 задание

Выведите столбец чисел от 1 до 50.*/

for (let i = 1; i <= 50; i++) {
    document.write(i + '<br>');
}
document.write('<br>');
/*2 задание

Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    document.write(i + ' елемент массива: ' + arr[i] + ';' + '<br>');
}
document.write('<br>');
/*3 задание

Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.*/

let arr2 = [2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
}
document.write(result);
document.write('<br>');

/*4 задание

Дан объект obj с ключами 'Минск', 'Москва', 'Киев'
 и значениями соответственно: 'Беларусь', 'Россия', 'Украина'.
  С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.*/


let obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина',
};

for (let key in obj) {
    let str = key + ' - это ' + obj[key] + ';<br>';
    document.write(str);
}
document.write('<br>');

/*5 задание

Дано число n=1000. Делите его на 2 столько раз, пока результат деления
 не станет меньше 50. Какое число получится? Посчитайте количество итераций,
  необходимых для этого (итерации - это количество проходов цикла), и запишите его в переменную num.*/

let n = 1000;
let num = 0;
while (n > 50) {
    n = n / 2;
    num++;
}
document.write(num);
document.write('<br>');


/*6 задание

Дан массив с элементами 2, 5, 9, 15, 0, 4.
С помощью цикла for и оператора if выведите на экран столбец тех
 элементов массива, которые больше 3-х, но меньше 10.*/

let arr3 = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr3.length; i++) {
     (arr3[i]>3 && arr3[i] < 10) ?  document.write(arr3[i]+', ') : null;
}
document.write('<br>');


/*7 задание

Составьте массив месяцев. С помощью цикла for выведите все месяцы,
 а текущий месяц выведите жирным. Текущий месяц должен храниться в
  переменной month.*/

let data = new Date();
let month = data.getMonth();
let arrayMonth = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];
for (let i =0; i<arrayMonth.length; i++){
    if ( month == i + 1){
        document.write('<b>'+arrayMonth[i]+'</b>');
    }
}