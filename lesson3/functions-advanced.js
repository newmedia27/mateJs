/*Напишите фулнкцию которая будет выводить текст на екран:
 "Как ваше имя?"; После ввода имя запишите как свойство "name"
  для ссылки внутри функции this;

Создайте пустой объект и вызовите эту функцию для объекта и
 просто для окна и посмотрите изменился ли объект, и создалась
  ли переменная name в окне браузера?*/


function name() {
    let name = prompt("Как ваше имя?");

}

/*Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10*/


function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result
}

console.log(sumTo(4));

/*Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. не используя Math.min();*/

function min(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return a;
    }
}

console.log(min(4, 6));

/*Создайте объект у которого будет:

    свойство "number" которое не будет перечисляемым при цикле for .. in и будет равно 9
    свойство "cantDelete" которое нельзя удалить
    метод "getDouble" которое будет записывать число которое будет передаватся в метод как
     аргумент умноженное на 2; а возвращать это же число деленное на 3;
      (то есть на set будет умножать число на 2, а на get будет отдавать это же число деленное на 3 )*/

function Obj() {
    Object.defineProperty(this, "double", {
        get: function () {
            return (this.cantDelete / 2) / 3;
        },
        set: function (value) {
            return this.cantDelete = value * 2;
        }
    });
}

let obj = new Obj();
obj.double = 3;
Object.defineProperty(obj, "number", {value: 9, enumerable: false});
Object.defineProperty(obj, "cantDelete", {configurable: false});
console.log(obj.double);


/*Напишите код, который отсортирует массив объектов people по полю age. Выведите список имён в массиве после сортировки.*/


var vasya = {name: 'Вася', age: 23};
var masha = {name: 'Маша', age: 18};
var vovochka = {name: 'Вовочка', age: 6};

var people = [vasya, masha, vovochka];

function arr(arr) {
    result =[];
    if (!Array.isArray(arr)) {
        alert('Не массив!');
        return false;
    }
     arr.sort(function (a,b) {
        if (a.age > b.age){
            return 1;
        }if (a.age < b.age){
            return -1;
        }
        return 0;
    });
    for (let i in arr){
        result.push(arr[i].name);
    }
    return result;

}
people = arr(people);
console.log(people);



/*Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).*/

function unique(arr) {

    if (Array.isArray(arr)){
        return  arr.filter(function (element, pos) {
            return arr.indexOf(element) == pos;
        });
    } else{
        console.log('not array');
        return false;
    }

}

console.log(unique([1,1,1,3,5,5,8,'fgfg','fgfg','1']));