//Callie Pretty - W0184129
#ifndef STUDENT_H
#define STUDENT_H

#include <string>

using namespace std;

class Student {
public:
    string name;
    string* courses;
    int numCourses;
    string getName() const;

public:
    // Default constructor
    Student();
    // Constructor with name
    Student(const string& name);
    // Copy constructor
    Student(const Student& other);
    // Destructor
    ~Student();

    // Assignment operator
    Student& operator=(const Student& other);

    void setName(const string& name);
    void addCourse(const string& course);
    void print();
    void resetCourses();
    friend ostream& operator<<(ostream& out, const Student& student);
};
#endif