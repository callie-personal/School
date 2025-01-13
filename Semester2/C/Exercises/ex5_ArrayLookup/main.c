#include <stdio.h>

int main() {

    int grades[6];
    double avg;
    int sum = 0;
    int lookup;

    for (int i = 0; i < 6; ++i) {
        printf("Please enter Grade %d\n",i + 1);
        scanf("%d", &grades[i]);
        if (grades[i] < 0) {
            printf("You cannot enter negative grades.\n");
            return 1;
        }
        else if (grades[i] > 100) {
            printf("You cannot enter grades above 100.\n");
            return 1;
        }
    }

    for (int i = 0; i < 6; ++i) {
        sum += grades[i];
    }

    avg = (double)sum / 6;

    printf("Your average for the term is: %.1lf\n", avg);
    printf("Which grade do you want to look up?\n");
    scanf("%d", &lookup);
    printf("Grade %d: %d",lookup,grades[lookup - 1]);
    return 0;
}
