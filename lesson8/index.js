// function isContextEqualTo(contextLink, currentContext) {
//     console.log(contextLink === currentContext);
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.getName = function () {
//         isContextEqualTo(window, this); // true
//         isContextEqualTo(user, this); // false
//         return this.name;
//     };
// }
//
// Person.getAge = function () {
//     isContextEqualTo(window, this); // true
//     return this.age;
// };
//
// var user = new Person("erer", 45);
//
// var getAge = Person.getAge;
// var getName = user.getName;
//
// console.log(getAge()); //  window
// console.log(getName()); //  window
// console.log(user.getName()); //  user
//
// Person.getAge = function() {
//     isContextEqualTo(Person, this); // true
//     return this.name;
// }
//
// user.getAge = getAge;
// console.log(user.getAge()); //  user


/*Create function getName, that takes a 'name' from it's current context, and returns it to user.
Then create an object, with 'name' key and call 'getName' in context of object, and then in context of global window.*/

function getName() {
    return this.name;
}

let obj = {
    name: 'Vasia',
    number: 2
};
// console.log(getName.apply(obj));
// console.log(getName.apply(window));


/*Create a funnction 'getDoubled' that will double a 'number' property in current context (depends on context) and multiply it to 2,
 then create funnction 'getDoubledTrippled' that will use getDoubled function result and multiplied it to 3. Use bind || call || apply in this cases.*/


function getDoubled() {
    return this.number * 2;
}

console.log(getDoubled.call(obj));

function getDoubledTrippled() {
    return getDoubled.call(this) * 3;
}

getDoubledTrippled.call(obj);

/*

    Create a constructor that will describe 'City'. It should

    have 'name', 'population', 'country' (passed as arguments to functions;
    have methods 'getPopulation'(return population), 'getCityName' (return city name);
    have constant: 'AREA' tht cannot me modified or deleted
    have 'addCitizen' method that increments 'popular' +1
*/


function City(name, population, country) {

    this.name = name;
    this.population = parseInt(population);
    this.country = country;

    this.getPopulation = () => {
        return this.population
    }
    this.getCityName = () => {
        return this.name
    }
    Object.defineProperty(this, 'AREA', {
        writable: false,
        configurable: false,
        value: 'Х.З'
    })
    this.addCitizen = () => {
        return this.population++
    }

}

// let city = new City('kiev', 2000000, 'ukraine');
// city.addCitizen();
// console.log(city);


/*
    Create function sum, that will return sum of different count of asrguments passed to it. It should work like this:

sum(2)(5)(6)(7)(2)(3)(4)( ); //29
sum(56)(-10)(3)(1)( ); //50

Or like this:

sum(2)(5)(6)(7)(2)(3)(4)
*/

function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}


alert(sum(2)(5)(6)(7)(2)(3)(4));


