// Обьявите переменнную str и запишите в нее строку "Have a good day!".
//     Выведите ее значение в консоль.

var str = "Have a good day!";
console.log(str);

// Обьявите переменнную age и запишите в нее значение 25.
// Выведите ее значение в консоль.
//     Сделайте значение переменной undefined;

let age;
console.log(age);

// Обьявите переменнную info.
// //     Запишите в нее 2 пары ключей - значения name и age.
// //     Выведите значение из объекта в консоль поочередно.
// //     Создайте переменную name.
// //     Запишите в нее значение из свойства обьекта info - name
// // Выведите значение в консоль.
// //     Удалите свойство name из объекта info
// // Выведите значение переменной name в консоль.

let info = {
    name: null,
    age: null
};
console.log(info.name);
console.log(info.age);

let name = info.name;
console.log(name);
delete info.name;
console.log(name);

// Обьявите переменнную customArray.
//     Запишите в нее массив из 3 элементов, каждый из которых является числом.
//     Выведите значение массива в консоль.
//     Перезапишите значение массива равным 0;
// Выведите значение массива в консоль.

let customArray = [1, 2, 3];
console.log(customArray);
customArray = 0;
console.log(customArray);


// Cоздайте переменную student значение которой будет ваше имя (тип данных переменной будет строка с вашем именем)
// Выведите в консоль значение переменной
// Перезапишите значение переменной на вашу фамилию и имя и виведите ее в консоль!
let student = 'Sviatoslav';
console.log(student);
student = 'Gubskiy Sviatoslav';
console.log(student);

// Cоздайте пустой массив complex
// Добавьте в 1 элемент массива строку "My name is:"
// Добавьте во 2 элемент массива число 7
// Добавьте в 3 элемент массива null
// Добавьте в 4 элемент массива объект из 3 задания
// Выведите 3 элемент массива в консоль


let complex = [];
complex = ["My name is:", 7, null, info];
console.log(complex[2]);


// Cоздайте пустой объект complexObj
//
// Добавьте в него пары ключ = значения
// name = "Your_name"
// age = Your_age(type number)
// friends = ["Add list of friend's names into this array"]
// soc_links(тип объект) с 2 ключами: facebook and googlePlus
//
// Выведите в косоль сообщения используя строки шаблоны вида: "My name is here_is_your_name" "I am your_age old" "I have a lot of friends, but the best one is: Your_best_friend_name" "You can find me on facebook: fb_link or on goole groups: googlePlus_link"
//
// Где каждое значение в строке вы подставляете из вашего объекта complexObj

let complexObj = {};
complexObj.name = "sviatoslav";
complexObj.age = 33;
complexObj.friends = ['vasya', 'petya'];
complexObj.soc_links = {
    facebook: null,
    googlePlus: null,
};

console.log( "My name is here_is_your_name" + complexObj.name + "I am your_age old"+complexObj.age+ "I have a lot of friends, but the best one is: Your_best_friend_name"+complexObj.friends[0]+ "You can find me on facebook:"+ complexObj.soc_links.facebook+" or on goole groups:"+ complexObj.soc_links.googlePlus);

