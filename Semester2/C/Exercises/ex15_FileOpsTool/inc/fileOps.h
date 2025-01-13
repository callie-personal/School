#ifndef EX15_FILEOPS_H
#define EX15_FILEOPS_H
#define MAX_MESSAGE_SIZE 1024

#include <stdio.h>
#include <stdbool.h>

int writeAppendToFile(char *filePath, char *inMessage, bool append);
int readFromFile(char *filePath, char *outMessage);

#endif //EX15_FILEOPS_H
