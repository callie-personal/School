#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "../inc/fileOps.h"

int main(int argc, char *argv[]) {
    if (argc < 3 || argc > 4) {
        fprintf(stderr, "Invalid number of command line arguments.");
        return 1;
    }

    char *operator = argv[1];
    char *filePath = argv[2];
    char *message = (argc == 4) ? argv[3] : NULL;
    char outMessage[MAX_MESSAGE_SIZE];

    if (strcmp(operator, "-w") == 0) {
        int result = writeAppendToFile(filePath, message, false);
        if (result == 0) {
            printf("File written.\n");
        }
    } else if (strcmp(operator, "-a") == 0) {
        int result = writeAppendToFile(filePath, message, true);
        if (result == 0) {
            printf("File written.\n");
        }
    } else if (strcmp(operator, "-r") == 0) {
        int result = readFromFile(filePath, outMessage);

        if (result == 0) {
            printf("File read. Contents:\n%s", outMessage);
        } else {
            fprintf(stderr, "Invalid command line argument usage.");
            return 1;
        }
    } else {
        fprintf(stderr, "Invalid command line argument usage.");
        return 1;
    }

    return 0;
}
