#include <stdio.h>

int calculateHCD(int a, int b){
    while (b != 0){
        int tempNum = b;
        b = a % b;
        a = tempNum;
    }
    return a;
}

int main() {

    // ENTER YOUR CODE HERE
    int num1;
    int num2;

    printf("Please enter the first number: ");
    if (scanf("%d", &num1) < 0) {
        printf("Sorry, you cannot enter a negative number, please enter a positive number");
    };
    printf("Please enter the second number: ");
    scanf("%d", &num2);

    if (num1 == 0 || num2 == 0) {
        printf("Sorry, you cannot enter 0");
        return 1;
    } else if (num1 < 0 || num2 < 0) {
        printf("Sorry, you cannot enter a negative number");
        return 1;
    }
        int HCD = calculateHCD(num1, num2);
        printf("The HCD of %d and %d is: %d", num1, num2, HCD);
        return 0;
    }
