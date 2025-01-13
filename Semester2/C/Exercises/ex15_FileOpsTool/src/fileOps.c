#include "../inc/fileOps.h"

int writeAppendToFile(char *filePath, char *inMessage, bool append) {
    FILE *file;

    if (append) {
        file = fopen(filePath, "a");
    } else {
        file = fopen(filePath, "w");
    }

    if (file == NULL) {
        fprintf(stderr, "Could not open file for reading!");
        return 1;
    }

    fprintf(file, "File written.\n");

    fclose(file);

    return 0;
}

int readFromFile(char *filePath, char *outMessage) {
    FILE *file = fopen(filePath, "r");

    if (file == NULL) {
        fprintf(stderr, "Could not open file for reading!");
        return 1;
    }

    while (fgets(outMessage, MAX_MESSAGE_SIZE, file) != NULL) {
        printf("%s", outMessage);
    }

    fclose(file);

    return 0;
}