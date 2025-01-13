#ifndef EX14_CALCULATOR_H
#define EX14_CALCULATOR_H

#include <math.h>

typedef enum {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    POWER
} Operator;

float calculateResult(Operator selectedOp, int value1, int value2);

#endif //EX14_CALCULATOR_H
