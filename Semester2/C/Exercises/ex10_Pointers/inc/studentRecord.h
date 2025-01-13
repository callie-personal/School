//
// Created by Mike on 2022-02-15.
//

#ifndef EX10_STUDENTRECORD_H
#define EX10_STUDENTRECORD_H

#include <stdbool.h>

struct Student
{
    char    studentID[9];
    char    firstName[16];
    char    lastName[16];
    float   *gradePointAverage;
    int     *term;
    bool    isFullTime;
};

#endif //EX10_STUDENTRECORD_H
