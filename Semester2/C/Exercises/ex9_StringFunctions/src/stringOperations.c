//
// Author: Callie Pretty
//

#include "../inc/stringOperations.h"
#include <ctype.h>
#include <stdbool.h>
#include <string.h>

int charCount(char inputString[], char letterToFind){
    int count = 0;

    for (int i = 0; inputString[i] != '\0'; ++i){
        if (tolower(inputString[i]) == tolower(letterToFind)){
            ++count;
        }
    }
    return count;
}

bool containsWord(char inputString[], char wordToFind[]){
    char inputCopy[128];
    strcpy(inputCopy, inputString);
    char *words = strtok(inputCopy, " ");

    while (words != NULL){
        if (strcasecmp(words, wordToFind) == 0){
            return true;
        }
        words = strtok(NULL, " ");
    }
    return false;
}