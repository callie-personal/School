[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NYA79LTS)
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 6

## Task

First take the code from our **leap.c** sample file in the **Resources for the Making  Decisions lecture** and **refactor it into a function** that returns true or false if a passed  in year is a leap year or not.

Call it from the main function to make sure it works.

Then create a **new function** that takes in the year and a numeric code for a month,   i.e. 1 = January, 2 = February, and so forth. Have it return the number of days in that month. **Make sure to make use of your new leap year function so you can correctly tell if February has 28 or 29 days that year**.

Also, return a message of "Bad year" if a year between 1 and 9999 not entered and return 1 error code.

Return a message of "Bad month" if a month between 1 and 12 not entered and return 1 error code.

**NOTE:** This would be a great job for a **switch-case** statement!!

**REMINDER:** "30 days has September, April, June, and November".


### Sample outputs:

Sample of bad year input:  
<img width="400px" src="https://prog2007.netlify.app/ex6-bad-year.png" alt="EX6 Bad Year">

Sample of bad month input:  
<img width="400px" src="https://prog2007.netlify.app/ex6-bad-month.png" alt="EX6 Bad Month">

Sample of proper input:  
<img width="400px" src="https://prog2007.netlify.app/ex6-success.png" alt="EX6 Success">

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