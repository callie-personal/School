//Author:   Callie Pretty
//Date:     Oct 21 2023

#include <stdio.h>

int main(void)
{
    // YOUR CODE GOES HERE
    int i,j;

    printf("TABLE OF PRODUCTS\n\n");  //Title

    printf("   N");  //Top left Corner, match up to other rows
    for (i = 1; i <= 10; i++) {
        printf("%6d", i); // Header for the top row, 6 characters wide, 5 spaces between numbers
    }
    printf("\n"); //next line

    for (i = 1; i <= 10; i++) {
        printf("%4d", i); // First column, under the "N"
        for (j = 1; j <= 10; j++) {
            printf("%6d", i * j); // show multiplication table, once j loop done, new line
        }
        printf("\n"); //goes to next row after every i loop
    }

    printf("\nREVERSED TABLE OF PRODUCTS\n\n");  //Title

    printf("   N");  //Top left Corner, match up to other rows
    for (i = 10; i >= 1; i--) {  // Reversed version of above loop
        printf("%6d", i); // Header for the top row, 6 characters wide, 5 spaces between numbers
    }
    printf("\n"); //next line

    for (i = 10; i >= 1; i--) {
        printf("%4d", i); // First column, under the "N"
        for (j = 10; j >= 1; j--) {  //reversed version of above loop
            printf("%6d", i * j); // show multiplication table, once j loop done, new line
        }
        printf("\n"); //goes to next row after every i loop
    }

    return 0;
}