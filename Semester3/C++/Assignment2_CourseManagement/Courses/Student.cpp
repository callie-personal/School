#include <string>

#include <iostream>
#include "Student.h"



using namespace std;

//Student Class

	//Default Constructor
	Student::Student() : name(""), courses(nullptr), numCourses(0) {
		cout << "Default Constructor called" << endl;
	}

	//Constructor with parameter (name)
	Student::Student(const string& name) : name(name), courses(nullptr), numCourses(0) {
		cout << "String constructor called" << endl;
	}

	//Copy Constructor
	Student::Student(const Student& original) : name(original.name), numCourses(original.numCourses) {

		//Allocate memory for the courses array
		courses = new string[numCourses];
		//Copy the courses from the other student to the new student
		copy(original.courses, original.courses + numCourses, courses);
		cout << "Copy Constructor called" << endl;
	}

	//Destructor
	Student::~Student() {
		//notnull test
		if (courses != nullptr) {
			//Delete the courses array
			delete[] courses;
			courses = nullptr;
		}
		cout << "Destructor called" << endl;
	}

	void Student::resetCourses() {
		//Delete the courses array
		delete[] courses;
		//Set the courses pointer to nullptr
		courses = nullptr;
		//Set the number of courses to 0
		numCourses = 0;
		cout << "resetCourses called" << endl;
	}

	//Assigning = Operator
	Student& Student::operator=(const Student& original) {
		if (this != &original) {
			name = original.name;
			numCourses = original.numCourses;
			delete[] courses;
			courses = new string[numCourses];
			copy(original.courses, original.courses + numCourses, courses);
		}
		cout << "Assignment Operator called" << endl;
		return *this;
	}

	void Student::addCourse(const string& course) {
		//Allocate memory for the courses array
		string* temp = new string[numCourses + 1];
		//Copy the courses from the other student to the new student
		copy(courses, courses + numCourses, temp);
		//Add the new course to the end of the array
		temp[numCourses] = course;
		//Delete the old courses array
		delete[] courses;
		//Assign the new array to the courses pointer
		courses = temp;
		//Increment the number of courses
		numCourses++;
		cout << "addCourse called" << endl;
	}

	void Student::setName(const string& name) {
		//Set the student's name
		this->name = name;
	}

	string Student::getName() const {
		//Return the student's name
		return name;
	}

	//overloading the << operator
	ostream& operator<<(ostream& os, const Student& student) {
		os << "Overloaded << operator called" << endl;
		//Print the student's name
		os << "Name: " << student.name << endl;
		os << "Courses: ";
		//Print the student's courses
		for (int i = 0; i < student.numCourses; i++) {
			os << student.courses[i] << " ";
		}
		os << endl;
		return os;
	}

	void Student::print() {
		//Print the student's name with overloaded <<
		cout << *this;
	};

