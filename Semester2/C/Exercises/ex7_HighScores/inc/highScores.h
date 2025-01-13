//
// Author: Callie Pretty
//

#ifndef EX7_HIGHSCORES_H
#define EX7_HIGHSCORES_H

typedef struct Date{
    int day;
    int month;
    int year;
} Date;

typedef struct Player {
    char userName[50];
    char score[10];
    Date scoreDate;
} Player;

void printHighScores(int bestPlayerCount, Player *bestPlayers);

#endif //EX7_HIGHSCORES_H
