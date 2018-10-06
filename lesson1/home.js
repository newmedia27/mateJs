/* 1 задание

Определите результат и тип переменных в следующих случаях: */

var r = '9' + 0; // "90"

var r = 9 + '0'; // "90"

var r = 4 + 9; //13

var r = null + 7; // 7

var r = '6' + null; // "6null"

var r = '6' + []; //6

var r = '6' + null; // "6null"

/*2 задание

Будет ли верным выражение:*/

2 / 3 + 1 + 1 / 3 == 2 // нет, ибо js не приведет сумму левой части к целому числу


/*Опишите почему да или нет?*/
/*3 задание

Определите результат в следующих случаях:*/

var r = 6 && 0 && 7; // 0
 
var r = -9 && -8;// -8
 
var r = 6 && 0 && 7; // 0 - дико удивлен повтором
 
var r = "string" && 0; // 0
 
var r = [] && {} && 7; // 7
 
var r = [] || 7; // []
 
var r = {} || 0;//{}
 
var r = false || true;// true
 
var r = "2" > "3";// fakse
 
var r = "ab" <= "fg";// true
 
var r = "2k" <= "8l";//true
 
var r = "2" != 2; // false
 
var r = "2" !== 2; // true
 
var r = ++2 + 2; // Тут ничего не будет, ибо синтаксис данного написания значения переменной в js не поддерживаеться, а вот если взть в скобочки () - 5
 
var r = ++2 + 2--; // Тут ничего не будет, ибо синтаксис данного написания значения переменной в js не поддерживаеться, а вот если взть в скобочки () - 5
 
var r = 1++ - 2--; // Тут ничего не будет, ибо синтаксис данного написания значения переменной в js не поддерживаеться, а вот если взть в скобочки () - (-1)



/*Часть 2*/

/*Passing value by value or by reference
1*/

var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number); // 9 14

// 2

var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); // 5

// 3

var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t);//10 9

// 4

var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number); //{name:kOLYA,number:67}, 67

// 5

var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya" // ,number:{}
};
object2.str.number = object2.str.number;

object2.str.number++;

console.log(object2.str.number); // Undefined - ибо эта строчка: object2.str.number = object2.str.number; - создает пустое свойство, выше показал, что даст при его инкременте - NaN т.е. ничего не произойдет,
 //  ну и само-собой разуеметься, что с момента пустого свойства ничего не поменялось -> как пустым задали - так оно и осталось undefined!