//Author: Callie Pretty

#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "../inc/wordle.h"
#define MAX_WORD_LENGTH 100

/*
 * NOTE: Follow this example to use ANSI colours at the terminal:
 * https://www.theurbanpenguin.com/4184-2/
 *
 * In order to get ANSI colors showing in the CLion Run Console,
 * we need to do the following routine:
 *
 * 1. Choose Help -> Edit Custom Properties from CLion menu
 * 2. Add the following line to the idea.properties file:
 *      run.processes.with.pty=false
 * 3. Restart CLion.
 *
 * Reference:
 * https://youtrack.jetbrains.com/issue/CPP-8395/Registry-setting-runprocesseswithpty-not-saved#focus=Comments-27-2499735.0-0
 *
 */

int main(int argc, char* argv[]) {
    if (argc != 5) {
        fprintf(stderr, "Invalid number of command line arguments.\n");
        return 1;
    }
    //declaring input and output file pointers
    char *inputFileName = NULL;
    char *outputFileName = NULL;
    //variable to store the option character (i or o) from getopt
    for (int i = 1; i < argc; i += 2) {
        if (strcmp(argv[i], "-i") == 0) {
            inputFileName = argv[i + 1];
        } else if (strcmp(argv[i], "-o") == 0) {
            outputFileName = argv[i + 1];
        } else {
            fprintf(stderr, "Invalid command line argument usage.\n");
            return 1;
        }
    }

    //open the input file
    FILE *inputFile = fopen(inputFileName, "r");
    if (inputFile == NULL) {
        fprintf(stderr, "Cannot open %s for reading.\n", argv[2]);
        return 1;
    }

    //read the two integers from input file for columns/rows
    int cols, rows;
    if (fscanf(inputFile, "%d %d", &cols, &rows) != 2) {
        fprintf(stderr, "Error text 3\n");
        fclose(inputFile);
        return 1;
    }

    //read the word from the second line to establish the correct word
    char correctWord[MAX_WORD_LENGTH];
    if (fscanf(inputFile, "%s", correctWord) != 1) {
        fprintf(stderr, "Error text 4\n");
        fclose(inputFile);
        return 1;
    }

    //open the output file
    FILE *outputFile = fopen(outputFileName, "w");
    if (outputFile == NULL) {
        fprintf(stderr, "Cannot open %s for writing.\n", argv[4]);
        return 1;
    }
    char **board;
    printf("Welcome to C-Wordle!!\n\n");
    //initialize the game
    initGame(&board, cols, rows);
    //display the board based on the rows/cols variables grabbed earlier
    displayBoard(board, cols, rows, correctWord);


    int currentGuess = 0;
    char guess[cols];

    //Running through the game loop
    while (currentGuess < rows) {
        printf("\nPlease enter a %d-letter word: \n", cols);
        scanf(" %s", guess);

//convert the entered word to uppercase for matching purposes
        for (int i = 0; i < cols; ++i) {
            guess[i] = toupper(guess[i]);
        }

//Checking if the guess is valid, first assuming it is
        int valid = 1;
        //check if the length of the guess matches the word length(cols)
        if (strlen(guess) != cols) {
            valid = 0;
        } else {
            for (int i = 0; i < cols; ++i) {
                //check if it's not an alphabetic character
                if (!isalpha(guess[i])) {
                    valid = 0;
                    break;
                }
            }
        }

//If it's not valid, reprompt for input with instructions
        if (!valid) {
            fprintf(stderr, "Sorry, but you can only enter %d-letter words.\n", cols);
            printf("Please enter a %d-letter word: ", cols);
            scanf(" %s", guess);
            continue;
        }

//Check if the current guess is correct and close the game either when they find the soluation or exhaust their attempts
        int result = checkGuess(board, guess, cols, rows, currentGuess, correctWord, outputFileName);
        if (result == 1) {
            fprintf(outputFile, "The solution was found.");
            break;
        } else {
            fprintf(outputFile, "The solution was not found.\n");
        }
        currentGuess++;
    }
    //free up the used memory
    freeBoardMem(board, rows);


    fclose(outputFile);
    //printing out to the output file
    printf("Result printed to %s\n", outputFileName);

    return 0;
}