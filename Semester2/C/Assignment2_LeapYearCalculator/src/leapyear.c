//Author:   Callie Pretty
//Date:     Oct 21 2023

#include "../inc/leapyear.h"

bool isLeapYear(int year){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){ //if the year is a multiple of 4 and not divisible by 100 it's a leap year
                                                                  //or it's divisible by 400 it's also a leap year
        return true;
    } else {
        return false;
    }
}