//Author:  Callie Pretty
//Date:    Oct 22 2023

#include <stdio.h>
#include "../inc/studentRecord.h"

void createStudentRecord(struct studentRecord *student) {
    //Asking for student ID number as an int
    printf("Enter Student ID: ");
    scanf("%d", &(student->StudentID));
    //Asking for student's last name, calling back to print off the student # previously entered
    printf("Please enter the last name for Student #%d:",student->StudentID);
    scanf("%20s", student->LastName);
    //Asking for student's first name, calling back to print off the student # previously entered
    printf("Please enter the first name for Student #%d:", student->StudentID);
    scanf("%20s", student->FirstName);

    //iterate through and prompt for 5 course names/marks
    for (int i = 0; i < 5; ++i) {
        printf("Please enter the course name: ");
        //don't need & because it's a string
        scanf("%20s", student->Courses[i].CourseName);
        //need & because it's a float to get memory location
        printf("Please enter mark for %s:", student->Courses[i].CourseName);
        scanf("%f", &(student->Courses[i].Mark));
    }
};

    void getAverageMark(struct studentRecord *student) {
        float totalMarks = 0;
        int numCourses = 0;
        //iterate through the 5 courses and give an average mark
        for (int i = 0; i < 5; ++i) {
            totalMarks += student->Courses[i].Mark;
            numCourses++;
        }
        //Average mark = totalMarks / total number of classes
        student->AverageMark = totalMarks / numCourses;
    };

    void reportCard(struct studentRecord *student){
        //printing the report card, calling back to StudentID, LastName, FirstName to fill in spots
        printf("Student: ID:%d Name: %s, %s\n",student->StudentID, student->LastName, student->FirstName);
        printf("--------------------------------------------------\n");
        //iterate through to print the 5 entered courses
        for (int i = 0; i < 5; ++i) {
            printf("Course name: %s Course mark: %.0f\n", student->Courses[i].CourseName, student->Courses[i].Mark);
        }
        //run getAverageMark function
        getAverageMark(student);
        //print the average mark from the 5 courses
        printf("\n\nGrade Average: %.1f\n\n", student->AverageMark);
    };
