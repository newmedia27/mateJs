/*Из массива arr выведите строку которая будет равна "Мама мыла раму"
 используя встроенные методы массива (если есть лишние елементы в массиве их нужно удалить!):*/
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
var str = '';
arr.reverse();
for (var i = 0;i < arr.length; i++){
    if (typeof arr[i] != "string"){
        arr.splice(i,-1);
    }else {
        str += arr[i];
    }
}
console.log(str);