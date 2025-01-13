//
// Author: Callie Pretty
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../inc/wordle.h"
//the ansi colours being defined
#define ANSI_COLOR_GREEN  "\x1b[32m"
#define ANSI_COLOR_YELLOW "\x1b[33m"
#define ANSI_COLOR_RESET  "\x1b[0m"

void initGame(char *** board, int wordSize, int maxGuesses) {
    //Allocating memory for the game board, a 2D array of Characters
    *board = (char**)malloc(maxGuesses * sizeof(char*));
    //iterate through each row/guess of the board
    for (int i = 0; i < maxGuesses; ++i) {
            //Allocate memory for each row to store the characters of the word
            (*board)[i] = (char *) malloc((wordSize + 1) * sizeof(char));
            //set all characters to '_' and the last character to a null terminator
            memset((*board)[i], '_', wordSize);
            (*board)[i][wordSize] = '\0';
        }
    }

void displayBoard(char **board, int wordSize, int maxGuesses, const char *correctWord) {
    printf("Current game state:\n");
    //iterate through each row and column
    for (int i = 0; i < maxGuesses; ++i) {
        for (int j = 0; j < wordSize; ++j) {
            //each character in the word in the current row
            char currentChar = board[i][j];
            //if the character is null, print an underscore for the game board
            if (currentChar == '\0') {
                printf("_");
            } else {
                //check if the current character matches the placement in the correct word
                if (currentChar == correctWord[j]) {
                    //if correct in correct spot, display as green
                    printf(ANSI_COLOR_GREEN "%c " ANSI_COLOR_RESET, currentChar);
                } else {
                    int isInCorrectWord = 0;
                    //check to see if the current character is in the correct word
                    for (int k = 0; k < wordSize; ++k) {
                        if (currentChar == correctWord[k]) {
                            isInCorrectWord = 1;
                            break;
                        }
                    }
                    //check if the character is in the correct word
                    if (isInCorrectWord) {
                        //if yes, and it's not in the correct spot, display in yellow
                        printf(ANSI_COLOR_YELLOW "%c " ANSI_COLOR_RESET, currentChar);
                    } else {
                        //if not in the word, display normally
                        printf("%c ", currentChar);
                    }
                }
            }
        }
        printf("\n");
    }
}

int checkGuess(char** board, const char* guess, int wordSize, int maxGuesses, int currentGuess, const char* correctWord, const char* filename) {
    // Check if the guessed word is correct
    int correct = 1;
    for (int i = 0; i < wordSize; ++i) {
        if (guess[i] != correctWord[i]) {
            correct = 0;
            break;
        }
    }

    //copy the guessed word to the board
    strncpy(board[currentGuess], guess, wordSize);
    board[currentGuess][wordSize] = '\0';

    //display the updated game board
    displayBoard(board, wordSize, wordSize + 1, correctWord);
    //if it's correct, print out response and return 1, printing to output file
    if (correct) {
        printf("You WIN!!!\nThe game result was written to the %s file.\n", filename);
        return 1;
    }
        //if you run out of attempts, print losing message and return 1, printing to output file
    else if (currentGuess >= maxGuesses) {
        printf("You LOSE!!!\n");
        printf("The game result was written to the %s file.\n", filename);
        writeGameResultToFile(board, maxGuesses, wordSize, filename);
        return 0;
    }
    //increment the current guess #
    currentGuess++;
}

//free up board memory
void freeBoardMem(char** board, int maxGuesses) {
    for (int i = 0; i < maxGuesses; ++i) {
        free(board[i]);
    }
    free(board);
}

void writeGameResultToFile(char** board, int maxGuesses, int wordSize, const char* filename) {
    FILE* file = fopen(filename, "w");
    //if you can't open the file, exit code 1
    if (file == NULL) {
        fprintf(stderr, "Error: Cannot open %s for writing.\n", filename);
        exit(1);
    }

    //write the game's result to the file
    for (int i = 0; i <= maxGuesses; ++i) {
        fprintf(file, "%s\n", board[i]);
    }

    fclose(file);
}
