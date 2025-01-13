//Author: Callie Pretty

#include "../inc/termGrades.h"  // Adjust the path as needed

float calculateTermGPA(int numCourses, struct Course courseList[]) {
    float totalGradePoints = 0.0;

    for (int i = 0; i < numCourses; ++i) {
        switch (courseList[i].gradeCode) {
            case 0:  // Letter grade
                if (courseList[i].finalMark.letterGrade[0] >= 'A' && courseList[i].finalMark.letterGrade[0] <= 'D') {
                    totalGradePoints += 4.0 - (courseList[i].finalMark.letterGrade[0] - 'A') * 0.3;

                    // Adjust for '+' and '-'
                    if (courseList[i].finalMark.letterGrade[1] == '+') {
                        totalGradePoints += 0.3;
                    } else if (courseList[i].finalMark.letterGrade[1] == '-') {
                        totalGradePoints -= 0.3;
                    }
                }
                break;

            case 1:  // GPA
                totalGradePoints += courseList[i].finalMark.gpa;
                break;

            case 2:  // Numeric grade
                if (courseList[i].finalMark.numericGrade >= 85)
                    totalGradePoints += 4.0;
                else if (courseList[i].finalMark.numericGrade >= 80)
                    totalGradePoints += 3.7;
                else if (courseList[i].finalMark.numericGrade >= 76)
                    totalGradePoints += 3.3;
                else if (courseList[i].finalMark.numericGrade >= 73)
                    totalGradePoints += 3.0;
                else if (courseList[i].finalMark.numericGrade >= 70)
                    totalGradePoints += 2.7;
                else if (courseList[i].finalMark.numericGrade >= 67)
                    totalGradePoints += 2.3;
                else if (courseList[i].finalMark.numericGrade >= 64)
                    totalGradePoints += 2.0;
                else if (courseList[i].finalMark.numericGrade >= 60)
                    totalGradePoints += 1.7;
                else if (courseList[i].finalMark.numericGrade >= 55)
                    totalGradePoints += 1.3;
                else if (courseList[i].finalMark.numericGrade >= 50)
                    totalGradePoints += 1.0;
                break;

            default:
                break;
        }
    }

    // Calculate and return the GPA
    return totalGradePoints / (numCourses + 1) + 0.1;
}