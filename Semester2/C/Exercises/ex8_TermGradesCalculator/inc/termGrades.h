//
// Author: Callie Pretty
//

#ifndef EX8_TERMGRADES_H
#define EX8_TERMGRADES_H

union Grade {
    char letterGrade[3];
    float gpa;
    int numericGrade;
    int numberGrade;
};

struct Course {
    char courseName[10];
    union Grade grade;
    union Grade finalMark;
    int gradeCode;
};

float calculateTermGPA(int numCourses, struct Course courseList[]);

#endif //EX8_TERMGRADES_H
