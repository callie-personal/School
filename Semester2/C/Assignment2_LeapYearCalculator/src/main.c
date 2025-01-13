// Assignment #2 - Starter Files
//Author:   Callie Pretty
//Date:     Oct 21 2023

#include <stdio.h>
#include "../inc/leapyear.h"

int main() {

    // YOUR CODE HERE - DO NOT FORGET TO CREATE SOURCE AND HEADER FILES FOR LEAP YEAR FUNCTION
    int year;
    bool isInt;
    char input;

    while (1) {
        printf("Please enter the year to check('N' to quit):");
        isInt = (scanf("%d", &year) == 1); //check if an integer was entered

        if (isInt) { //if an integer was entered, proceed
            if (isLeapYear(year)) { //if it's a leap year
                printf("%d IS a leap year!\n", year);
            } else { //if it's not a leap year
                printf("%d IS NOT a leap year!\n", year);
            }
        } else if (scanf("%c", &input) == 1 && (input == 'N')) { //check if the user enters 'n' to quit
            break;
        } else {
            printf("Sorry that input is invalid\n"); //if it's not an integer, re-enter
        }
    }

    for (int i = 1; i <= 21; i++) {
        printf("Century #%d: ",i); //loop to print the Century #'s

        for (int j =(i-1) * 100 + 1; j <= i * 100; j++){ //centuries set to start at ex. 1601, 1701 instead of 1600 or 1700
            if (isLeapYear(j) && j <= 2022){ //cut off the printout at 2022
                printf("%4d ", j);
            }
        }
        printf("\n"); //adds space before exit code message
    }
        return 0;
    }