//  Author: Callie Pretty
//  Date: Nov 10 2023

#include "../inc/highScores.h"
#include <stdio.h>

void printHighScores(int bestPlayerCount, struct Player *bestPlayers) {
    printf("\n\nHigh Scores\n\n");
    for (int i = 0; i < bestPlayerCount; i++) {
        printf("%s    ", bestPlayers[i].userName);
        printf("%s    ", bestPlayers[i].score);
        printf("%01d/%01d/%04d\n", bestPlayers[i].scoreDate.month, bestPlayers[i].scoreDate.day, bestPlayers[i].scoreDate.year);
    }
}