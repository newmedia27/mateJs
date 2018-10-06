/*1 task

 Write a JavaScript for loop that will iterate from 0 to 15.
  For each iteration, it will check if the current number is odd or even,
   and display a message to the screen.

 ** Sample Output: **

 "0 is even"
 "1 is odd"
 "2 is even"
 */

for (i = 0; i <= 15; i++) {
    (i % 2 == 0) ? document.write(i + ' is even <br>') : document.write(i + ' is odd <br>');
}


/*2 task

Write a JavaScript program which iterates the integers
 from 1 to 100. But for multiples of three print "Fizz" instead
  of the number and for the multiples of five print "Buzz".
   For numbers which are multiples of both three and five print "FizzBuzz".*/


for (i = 1; i <= 100; i++) {
    let num = 0;
    if (i % 3 == 0 && i % 5 == 0) {
        num = 'FizzBuzz';

    } else if (i % 5 == 0) {
        num = 'Buzz';
    } else if (i % 3 == 0) {
        num = 'Fiz';
    } else {
        num = i;
    }
    document.write(num);
    document.write('<br>');
}

/*3 task

Write a JavaScript program to compute
 the greatest common divisor (GCD) of two positive integers*/

function nod(a, b) {
    let result;
    if (b > 0) {
        result = a % b;
        return nod(b, result);
    } else {
        return Math.abs(a);
    }

}

console.log(nod(96, 150));

/*Напишите программу JavaScript, чтобы суммировать кратные 3 и 5 менее 1000.*/

function sum(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    return result;

}

console.log(sum(1000));

/*Console log all numbers from range 10-90 that divide to 5 and 3.*/

function sum2() {
    for (let i = 10; i <= 90; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}

sum2();

/*Console log only odd numbers from range 11-70 in reverse order starting with 70.*/

for (let i = 70; i >= 11; i--) {
    if (i % 2 != 0) {
        console.log(i);
    }

}
/*Console log only even numbers that divide to 2 and 3 from range 13-78 in reverse order.*/

for (let i = 78; i >= 13; i--) {
    if (i % 3 == 0 && i % 2 == 0) {
        console.log(i);
    }
}