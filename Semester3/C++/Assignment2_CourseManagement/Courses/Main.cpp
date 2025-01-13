#include "Student.h"
#include <iostream>
#include <string>

using namespace std;

int main() {
	char quit;
	do {
		// Create a student object, then ask for name and courses
		string name;
		cout << "Enter first student's name: ";
		cin >> name;
		Student studentOne(name);

		string course;
		cout << "Enter course name(s), type done when completed): \n";
		do {
			cin >> course;
			//if they don't type done, add the course to the student's list
			if (course != "done") {
				studentOne.addCourse(course);
			}
		} while (course != "done");

		//print the first student's details
		cout << "\nDetails of student one: \n";
		studentOne.print();

		//Ask for the name of a second student and display this new student after copying the 1st student’scourse information and writing in the new name
		cout << "\nEnter second student's name: ";
		cin >> name;
		Student studentTwo(studentOne);
		studentTwo.setName(name);

		//print the second student's details
		cout << "\nDetails of student two with copied courses from student one: \n";
		studentTwo.print();



		//create a third student and use the assignment operator to copy the second student’s information into the third student
		Student studentThree;
		studentThree = studentTwo;
		cout << "\nEnter the third student's name: ";
		cin >> name;
		studentThree.setName(name);

		//print the third student's details
		cout << "\nDetails of student three after assignment operator: \n";
		cout << studentThree;

		//Display the 1st student’s name, the number of courses in their list
//of courses after executing afunction that resets the number of 
//courses to 0 and the courseList array to an empty list.
		studentOne.resetCourses();
		cout << "\nDetails of student one after resetting courses: \n";
		studentOne.print();
		cout << "\nDetails of student two: \n";
		studentTwo.print();

		//ask the user if they want to quit
		cout << "Press 'q' to quit or any other key to continue: ";
		cin >> quit;

		//call destructors
		//udentOne.~Student();
		//udentTwo.~Student();
		//udentThree.~Student();

	} while (quit != 'q');
	
	cout << "Goodbye!" << endl;
	return 0;
}
