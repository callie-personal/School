#include <stdio.h>
#include <ctype.h>
#include "../inc/stringOperations.h"

int main() {

    // BLOCK 1
    char message[64];
    char letter;

    // read in the sentence
    printf("Enter the sentence to search:\n");
    scanf("%[^'\n']s",message);

    // read in the letter to search for
    printf("Enter the letter to count:\n");
    scanf(" %c",&letter);

    printf("There are %i %c letters in '%s'\n",
           charCount(message,letter), toupper(letter), message);
    // BLOCK 1

    // BLOCK 2
    char word[12];

    // read in the word to search for
    printf("\nEnter the word to search for:\n");
    scanf("%s",word);

    printf("%s in '%s': %s\n",
           word, message, containsWord(message,word) ? "true" : "false");
    // BLOCK 2

    return 0;
}
