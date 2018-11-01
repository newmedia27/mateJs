/*Из массива arr выведите строку которая будет равна "Мама мыла раму"
 используя встроенные методы массива (если есть лишние елементы в массиве их нужно удалить!):*/
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
var str = '';
arr.reverse();
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
        arr.splice(i, -1);
    } else {
        str += arr[i];
    }
}
console.log(str);


/*Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.*/

function isPal(str) {
    str = str.replace(/\s/g, '').toLocaleLowerCase();
    arr = str.split('');
    arr = arr.reverse();
    arr = arr.join('');
    if (arr === str) {
        return true;
    } else {
        return false;
    }
}

console.log(isPal('vasa'));


/*Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов, киборг - гробик, корсет - костер - сектор,

Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.*/

function anClean(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].toLowerCase().split('').sort().join('') === arr[j].toLowerCase().split('').sort().join('')) {
                arr.splice(j, 1);
                j -= 1;
            }
        }
    }
    return arr;

}

console.log(anClean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор', 'озв', "хрень"]));


/*Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:*/

var arr = ['rrrA', 'toboR', 'ekiL', 'dooG', 'esoR'];

function joinString(arr) {
    arr.reverse();
    result = [];
    for (let i in arr) {
        result.push(arr[i].split('').reverse().join(''));
    }

    return result.join(' ');
}

console.log(joinString(arr));

/*
    Найти сумму целых чисел от 1 до 100
    Найти сумму четных чисел от 0 до 100.
*/

function sumNumbers(a, b, even = false) {
    let result = 0;
    if (even === false) {
        for (a; a <= b; a++) {

            result += a;
        }
    }
    if (even === true) {
        a = 0;
        for (a; a <= b; a++) {
            if (a % 2 === 0) {

                result += a;
            }
        }
    }
    return result;

}

console.log(sumNumbers(1, 100));
console.log(sumNumbers(1, 100, true));


/*Напишите функцию callMe которая будет принимать 3 аругумента,
это будут цыфры, потом она будет суммировать их и выводить на екран результат их суммы!

Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и
возвращать null; (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )*/


function callMe(a, b, c) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            console.error('Аргумент ' + arguments[i] + ' должен быть числом');
            return null;
        } else {
            result += arguments[i];
        }
    }

    return result;
}

console.log(callMe(1, '', 3));


/*Напишите функцию callMeAgain которая будет принимать 1 аргумент,
 который будет массивом. Она должна возвращать массив соедененный
  через запятые и отсортированный по алфавиту (Array.join(','));*/

function callMeAgain(arr) {
    return arr.sort().join(',');
}

console.log(callMeAgain(['a', 'z', 'u', 'b', 'r', 'c']));


/*Дан массив объектов:
Отсортируйте массив по полю age*/
var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

function arrSort(a, b) {
    return a.age - b.age;
}

arr.sort(arrSort);
console.log(arr);


/*Через prompt узнайте у пользователя его имя и возраст,
 и запишите в отсортированный массив с 8 задания в правильную позицию,
  чтобы все элементы в массиве остались отсортированные по полю age

Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"*/


function user(arr) {


    let obj = {
        name: prompt('What is you name?'),
        age: prompt('you age')
    };

    if (obj.name === '' || obj.name === null && typeof obj.age !== "number") {
        user();
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (obj.name === arr[i].name) {
                alert('Гуляй Вася!!!');
                return false;
            }
        }
    }
    arr.push(obj);
    return arr.sort(arrSort);
}

// console.log(user(arr));

/*Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.

Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.*/


function countNumber(arr, a) {
    str = arr.join('');
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == a) {
            result++;
        }
    }
    return result;
}

console.log(countNumber([33, 3, 3, 3333, 2, 11, 22, 4, 5], 3));

/*Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.*/


function toStr(arr) {
    let result = [];
    while (arr.length > 0) {
        result.push(arr.shift());
        result.push(arr.pop());
        result.push('-');
    }
    result.pop();
    return result.join('');

}

console.log(toStr(['1', '2', '3', '4', '5', '6']));


/*Даны два массива, к примеру

[1,2,3]
[4,5,6]

Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].

Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).*/


function arraySum(a, b) {
    let sum = Math.abs(a.length - b.length);
    let result = [];
    if (sum !== 0) {
        for (let i = 0; i < sum; i++) {
            if (a.length < b.length) {
                a.push(0);
            }
            else {
                b.push(0);
            }
        }
    }

    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }
    return result;
}

console.log(arraySum([1, 2, 3], [4, 5, 6, 77]));


/*Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.

Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).*/

function deleteElement(arr, a) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(deleteElement([1, 2, 3, 4, 3, 3], 3));


/*Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.

Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].*/

let n = 0;

function intersection(a, b, c) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== -1 && c.indexOf(a[i] !== -1)) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));


/*Дан массив с числами, к примеру [2, 3, 1, 4]. Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4]. В массиве могут быть только целые положительные числа.*/


function newArr(arr) {
    let result = [];
    for (let i in arr) {
        for (let j = 0; j < arr[i]; j++) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(newArr([2, 3, 1, 4]));


/*Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера. Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].*/


function zero(arr, n) {
    if (arr.length !== n) {
        let result = Math.abs(arr.length - n);
        for (let i = 0; i < result; i++) {
            arr.push(0);
        }
        return arr;
    }
}

console.log(zero([1, 2, 3], 6));

/*Дан массив с числами. Не используя цикл, выведите:

    Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
    Первые 3 отрицательных числа в массиве (по порядку следования).
*/

let array = [1, 1, -1, 2, 5, -4, -8, 99, 5, 66, 7, -8];
arr = array.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
});

arr = arr.sort((a, b) => a - b);
let min1 = array[0];
let min2=array[1];
let min3=array[2];

/*2*/

array= array.filter(function (value, index, arr) {
    return value <0;
});
let first = array[0];
let second=array[1];
let third=array[2];

console.log(array);