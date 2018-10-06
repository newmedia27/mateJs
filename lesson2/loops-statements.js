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
    if(i % 3 == 0 && i % 5 == 0)  {
        num = 'FizzBuzz';

    } else if (i % 5 == 0) {
        num = 'Buzz';
    } else if (i % 3 == 0) {
        num = 'Fiz';
    }else {
        num = i;
    }
    document.write(num);
    document.write('<br>');
}

/*3 task

Write a JavaScript program to compute
 the greatest common divisor (GCD) of two positive integers*/