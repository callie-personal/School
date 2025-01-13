#include <stdio.h>
#include <stdlib.h>

#include "../inc/calculator.h"

int main(int argc, char *argv[]) {
    if (argc != 4) {
        printf("Sorry, bad number of command line arguments.");
        return (1);
    }

    char operator = argv[1][1];
    Operator selectedOperator;

    switch (operator) {
        case 'a':
            selectedOperator = ADDITION;
            break;
        case 's':
            selectedOperator = SUBTRACTION;
            break;
        case 'm':
            selectedOperator = MULTIPLICATION;
            break;
        case 'd':
            selectedOperator = DIVISION;
            break;
        case 'p':
            selectedOperator = POWER;
            break;
        default:
            printf("Sorry, bad operator.");
            return 1;
    }

    int operand1 = atoi(argv[2]);
    int operand2 = atoi(argv[3]);

    float result = calculateResult(selectedOperator, operand1, operand2);

    printf("The result is %.3f.\n", result);

    return 0;
}
