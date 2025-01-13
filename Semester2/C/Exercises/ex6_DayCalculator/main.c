#include <stdio.h>
#include <stdbool.h>

/*
 * First take the code from our leap.c sample file in the Resources for the Making Decisions
 * lecture and refactor it into a function that returns true or false if a passed in year
 * is a leap year or not. Call it from the main function to make sure it works.
 *
 * Then create a new function that takes in the year and a numeric code for a month, i.e. 1 = January,
 * 2 = February, and so forth. Have it return the number of days in that month. Make sure to make
 * use of your new leap year function so you can correctly tell if February has 28 or 29 days that
 * year.
 *
 * Also, return a message of "Bad year" if a year between 1 and 9999 not entered and return 1 error code.
 * Return a message of "Bad month" if a month between 1 and 12 not entered and return 1 error code.
 *
 * NOTE: This would be a great job for a switch-case statement!!
 * REMINDER: "30 days has September, April, June, and November".
 */

// ADD NEW FUNCTIONS HERE
int isLeapYear(int year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return 1; // It's a leap year
    } else {
        return 0; // It's not a leap year
    }
}

int numDays(int year, int month){
     int days = 0;
     int isLeap = isLeapYear(year);

         switch (month) {
             case 1:
             case 3:
             case 5:
             case 7:
             case 8:
             case 10:
             case 12:
                 days = 31;
                 break;

             case 2:
                 if (isLeap == 1){
                     days = 29;

         } else {
                     days = 28;
                 }
                 break;

             case 4:
             case 6:
             case 9:
             case 11:
                 days = 30;
                 break;
     }
     return days;
}

int main() {
    int year;
    int month;
    int days;

    // YOUR MAIN CODE HERE
    printf("Please enter the year:\n");
    scanf("%d", &year);
    if (year <= 0 || year > 9999){
        printf("Bad year\n");
        return 1;
    }

    printf("Please enter the month:\n");
    scanf("%d", &month);
    if (month <= 0 || month > 12){
        printf("Bad month\n");
        return 1;
    }

    days = numDays(year, month);

    printf("That month has/had %d days.", days);

    return 0;
}
