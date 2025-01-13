#include <stdio.h>

/*
    Using the program in example 2.6 (page 18) of the textbook as a guide
    create a program that stores the values 50 and 25 in two variables
    and outputs the result of adding, subtracting,  multiplying , and dividing them.

    Desired output:
        The sum of 50 and 25 is 75
        The difference of 50 and 25 is 25
        The product of 50 and 25 is 1250
        The result of dividing 50 by 25 is 2

    Then, uncomment and fix the indicated block of code.

    Desired output:
        The answer is 43
*/

int main() {

    // YOUR CODE HERE!!!
    int a = 50;
    int b = 25;
    printf("The sum of %d and %d is %d", a, b, a + b);
    printf("\nThe difference of %d and %d is %d", a, b, a - b);
    printf("\nThe product of %d and %d is %d", a, b, a * b);
    printf("\nThe result of dividing %d by %d is %d", a, b, a / b);


    // SELECT FOLLOWING 5 LINES OF CODE, USE CRTL+/ TO UNCOMMENT, FIX THIS BLOCK OF CODE
    int total;

    total = 25 + 37 - 19;

    printf ("\nThe answer is %i\n", total);


    return 0;
}
