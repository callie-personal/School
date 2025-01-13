// Author: Callie Pretty

#include "../inc/highScores.h"
#include <stdio.h>
#include <stdlib.h>

int main() {
    Player players[5];
    int count = 0;


    while (count < 5) {
        printf("Enter the player name (Q to quit): ");
        scanf("%s", players[count].userName);
        if (players[count].userName[0] == 'Q') {
            break;
        }

        printf("Enter score: ");
        scanf("%s", players[count].score);

        printf("Enter the month:");
        scanf("%d", &players[count].scoreDate.month);
        printf("Enter the day:");
        scanf("%d", &players[count].scoreDate.day);
        printf("Enter the year:");
        scanf("%d", &players[count].scoreDate.year);

        count++;
    }

    if (count > 0) {
        printHighScores(count, players);
    }

    return 0;
}
