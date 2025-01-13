#include <stdio.h>
#include <string.h>

#include "../inc/studentRecord.h"

int main() {

    struct Student  studentOne;
    float           gpa = 3.57;
    int             term = 2;

    // TODO - Create a pointer to the studentOne variable
    struct Student* studentPointer = &studentOne;
    // TODO - Using the pointer, set the student's properties
    // NOTE - Two of the struct's members are pointers themselves
    snprintf(studentPointer->studentID, sizeof(studentPointer->studentID), "w5555555");
    snprintf(studentPointer->firstName, sizeof(studentPointer->firstName), "Justin");
    snprintf(studentPointer->lastName, sizeof(studentPointer->lastName), "Trudeau");
    studentPointer->gradePointAverage = &gpa;
    studentPointer->term = &term;
    studentPointer->isFullTime = false;

    // TODO - Output the student's details using the Pointer
    printf("Student One:\nID: %s NAME: %s, %s\nTERM: %i GPA: %.2f FULL-TIME: %s\n",
           studentPointer->studentID, studentPointer->lastName, studentPointer->firstName,
           *studentPointer->term, *studentPointer->gradePointAverage, studentPointer->isFullTime ? "true" : "false");
    // TODO - Uncomment and fix the following code
    int originalVariable;
    int originalVarPointer;

    originalVariable = 10;
    originalVarPointer = originalVariable;
    originalVarPointer = originalVarPointer + 10;

    printf("\nFirst updated variable value: %i\n", originalVarPointer);

    originalVarPointer+=10;

    printf("\nSecond updated variable value: %i\n", originalVarPointer);

    return 0;
}


