
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 14

## Task

We are going to build a simple calculator program that works on command line arguments.

### IMPORTANT NOTE:

To get the math library to work on GitHub, make sure "-lm" is added to the end of the gcc line in the **Makefile**:  
*gcc -o ${OUT_FILE} src/main.c src/calculator.c **-lm***

### STEPS:

Our program will be called like so:

EX14.exe [op ] [int1] [int2]

**ops**: **-a** = add, **-s** = subtract, **-m** = multiply, **-d** = divide, **-p** = power

e.g. .\EX14.exe -m 4 3

If proper arguments are used, show the result to three decimal places.

There is no "**" operator in C, you will need to use the proper function from **math.h** for the power (exponent).

If there is an incorrect number of command line arguments, we should print the correct message and return 1 as indicated in the examples below.

If the second command line arguments is not a valid operator string, we should print the correct message and return 1 as indicated in the examples below.

There is a limit to how much validation we can do on an in-class exercise though, so we can assume valid **ints** for the third and fourth command line arguments.

### IMPORTANT NOTE:

Make use of the **typedef enum** provided in "inc/calculator.h" and make sure to pass the operator as that data type into your function in "src/calculator.c" (i.e. implement the function prototype declaration already included in "inc/calculator.h").

### Sample outputs:

Sample of improper number of command line arguments:  
<img width="400px" src="https://prog2007.netlify.app/ex14-bad-num-args.png" alt="EX14 Improper Number of Command Line Arguments">

Sample of improper operator:  
<img width="400px" src="https://prog2007.netlify.app/ex14-bad-op.png" alt="EX14 Improper Operator">

Sample of addition:  
<img width="400px" src="https://prog2007.netlify.app/ex14-add.png" alt="EX14 Addition">

Sample of subtraction:  
<img width="400px" src="https://prog2007.netlify.app/ex14-subtract.png" alt="EX14 Subtraction">

Sample of multiplication:  
<img width="400px" src="https://prog2007.netlify.app/ex14-multiply.png" alt="EX14 Multiplication">

Sample of division:  
<img width="400px" src="https://prog2007.netlify.app/ex14-divide.png" alt="EX14 Division">

Sample of exponent:  
<img width="400px" src="https://prog2007.netlify.app/ex14-power.png" alt="EX14 Exponent">

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