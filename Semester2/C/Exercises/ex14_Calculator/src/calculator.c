#include "../inc/calculator.h"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

float calculateResult(Operator selectedOp, int value1, int value2){
    switch (selectedOp) {
        case ADDITION:
            return value1 + value2;
        case SUBTRACTION:
            return value1 - value2;
        case MULTIPLICATION:
            return value1 * value2;
        case DIVISION:
            if (value2 != 0) {
                return (float)value1 / value2;
            } else {
                printf("Error: Dividing by zero.\n");
                exit(1);
            }
        case POWER:
            return pow((double)value1, (double)value2);
        default:
            printf("Sorry, bad operator.\n");
            exit(1);
    }
}