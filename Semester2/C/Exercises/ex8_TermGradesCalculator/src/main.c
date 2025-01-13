#include <stdio.h>
#include <string.h>
#include "../inc/termGrades.h"

#define NUM_OF_CLASSES 7

int main() {

    // BLOCK 1 - BEGIN

    // create a Course struct
    struct Course appd1001;
    struct Course comm2700;
    struct Course dbas4002;
    struct Course osys1000;
    struct Course prog1400;
    struct Course prog2007;
    struct Course saad1001;

    // Populate and Output Grade for APPD1001 => LETTER
    strcpy(appd1001.courseName,"APPD1001");
    appd1001.gradeCode = 0;
    strcpy(appd1001.finalMark.letterGrade,"A-");

    printf("The final mark for %s is a %s.\n",
           appd1001.courseName, appd1001.finalMark.letterGrade);

    // Populate and Output Grade for COMM2700 => GPA
    strcpy(comm2700.courseName,"COMM2700");
    comm2700.gradeCode = 1;
    comm2700.finalMark.gpa = 3.3;

    printf("The final mark for %s is a %.1f.\n",
           comm2700.courseName, comm2700.finalMark.gpa);

    // Populate and Output Grade for DBAS4002 => NUMERIC
    strcpy(dbas4002.courseName,"DBAS4002");
    dbas4002.gradeCode = 2;
    dbas4002.finalMark.numberGrade = 73;

    printf("The final mark for %s is a %i.\n",
           dbas4002.courseName, dbas4002.finalMark.numberGrade);

    // Populate and Output Grade for OSYS1000 => GPA
    strcpy(osys1000.courseName,"OSYS1000");
    osys1000.gradeCode = 1;
    osys1000.finalMark.gpa = 3.7;

    printf("The final mark for %s is a %.1f.\n",
           osys1000.courseName, osys1000.finalMark.gpa);

    // Populate and Output Grade for PROG1400 => LETTER
    strcpy(prog1400.courseName,"PROG1400");
    prog1400.gradeCode = 0;
    strcpy(prog1400.finalMark.letterGrade,"B");

    printf("The final mark for %s is a %s.\n",
           prog1400.courseName, prog1400.finalMark.letterGrade);

    // Populate and Output Grade for PROG2007 => NUMERIC
    strcpy(prog2007.courseName,"PROG2007");
    prog2007.gradeCode = 2;
    prog2007.finalMark.numberGrade = 88;

    printf("The final mark for %s is a %i.\n",
           prog2007.courseName, prog2007.finalMark.numberGrade);

    // Populate and Output Grade for SAAD1001 => LETTER
    strcpy(saad1001.courseName,"SAAD1001");
    saad1001.gradeCode = 0;
    strcpy(saad1001.finalMark.letterGrade,"C-");

    printf("The final mark for %s is a %s.\n",
           saad1001.courseName, saad1001.finalMark.letterGrade);

    // BLOCK 1 - END

    // BLOCK 2 - BEGIN
    struct Course termCourses[NUM_OF_CLASSES];
    termCourses[0] = appd1001;
    termCourses[1] = comm2700;
    termCourses[2] = dbas4002;
    termCourses[3] = osys1000;
    termCourses[4] = prog1400;
    termCourses[5] = prog2007;
    termCourses[6] = saad1001;

    printf("\nYour Term GPA is: %.1f.",calculateTermGPA(NUM_OF_CLASSES,termCourses));

    // BLOCK 2 - END

    return 0;
}

