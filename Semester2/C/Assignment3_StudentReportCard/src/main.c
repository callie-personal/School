#include <stdio.h>
#include "../inc/studentRecord.h"


int main() {
    struct studentRecord student1;
    struct studentRecord student2;
    struct studentRecord student3;
    createStudentRecord(&student1);
    createStudentRecord(&student2);
    createStudentRecord(&student3);
    printf("******************************REPORT CARDS******************************\n\n");
    reportCard(&student1);
    reportCard(&student2);
    reportCard(&student3);
    return 0;
}

