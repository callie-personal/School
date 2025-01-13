//
// Author: Callie Pretty
//

#ifndef ASSIGN5_WORDLE_H
#define ASSIGN5_WORDLE_H

void initGame(char *** board, int wordSize, int maxGuesses);
void displayBoard(char** board, int currentGuess, int wordSize, const char* correctWord);
int checkGuess(char** board, const char* guess, int wordSize, int maxGuesses, int currentGuess, const char* correctWord, const char* filename);
void freeBoardMem(char** board, int maxGuesses);
void writeGameResultToFile(char** board, int maxGuesses, int wordSize, const char* filename);
#endif //ASSIGN5_WORDLE_H
