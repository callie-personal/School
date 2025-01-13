
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 8

## Task

You will create a header file called "**inc/termGrades.h**" that has a **struct** and **union** defined in it. The Union will be called **Grade** and will look like my example from today's slides. The Struct will be called **Course** and will also look like the one from my slides with one change:  add an integer value called gradeCode that will hold 0 for letter grades, 1 for GPA, & 2 for numeric grades.

**Now, uncomment the code block marked "BLOCK 1" in main.c.**

You should see following output and the first 7 tests should pass:
<img width="400px" src="https://prog2007.netlify.app/ex8-block-a.png" alt="EX8 Block A">

Then, declare the following function in the "**inc/termGrades.h**" file:    
*float calculateTermGPA(int numCourses, struct Course courseList[]);*

Implement that function in a new source file called "**src/termGrades.c**". The function should calculate the term GPA for a passed in array of courses. You will need to use the saved gradeCode status in each course so you know which format the grade is in.

**Uncomment "BLOCK 2" in main.c and the last test should pass.**

**NOTE**: Use the **Alberta** section of the following chart for grade conversions:  
[https://gpacalculator.net/grade-conversion/canada/](https://gpacalculator.net/grade-conversion/canada/)

### Sample outputs:

Sample of full output:  
<img width="400px" src="https://prog2007.netlify.app/ex8-success.png" alt="EX8 Success">

### Instructions:
-   Clone this repository to your local machine, make changes in CLion so all tests pass, and then commit and push the entire project up to GitHub
-   You should then be able to see your raw score on GitHub out of 10 as shown in class. The final grade will depend on the time of submission, see below:

#### Marking Scheme
Final Grade | Requirement
:---: | ---
|**10/10** | Exercise is correct (passes all tests) and is completed within the allotted in-class time.
|**8/10** | Exercise is correct (passes all tests) and is completed within a 12-hour grace period beginning immediately following the end of in-class time.
|**6/10** | Exercise is correct (passes all tests) and is completed and submitted after the 12-hour grace period has elapsed.
|**0/10** | Exercise is not submitted or does not pass all tests.

> Written with [StackEdit](https://stackedit.io/).