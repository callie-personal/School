//Author:   Callie Pretty
//Date:     Oct 22 2023

#ifndef STUDENT_RECORD_H
#define STUDENT_RECORD_H

//course record prototype
struct courseRecords {
    char CourseName[21];
    float Mark;
};

//student record prototype & type alias
typedef struct studentRecord {
    int StudentID;
    char LastName[21];
    char FirstName[21];
    struct courseRecords Courses[5];
    float AverageMark;
} studentRecord;

//function prototypes
void createStudentRecord(struct studentRecord *student);
void getAverageMark(struct studentRecord *student);
void reportCard(struct studentRecord *student);

#endif