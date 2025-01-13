
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 15

## Task
We are going to build a simple program that writes, appends, and reads messages to/from a specified file.

**It will work on command line arguments.**

### STEPS:

Our program will be called like so:    
*EX15.exe <op > <file> [message]*

**ops**: **-w** = write, **-a**= append, **-r**  = read

**Usage examples:**  
.\EX14.exe -w outFile.txt "C is fun!"  
.\EX14.exe -a outFile.txt "C ++ will be even more fun!"  
.\EX14.exe -r outFile.txt

If a "**-w**" (i.e. write) is performed, the message is written as the only line of the file.

If a "**-a**" (i.e. append) is performed, the message is written as an additional line of the file.

If a "**-r**" (i.e. read) is performed, the entire file's contents will be displayed to the console.

It may look odd that the **-r** operator is used on a file named "outFile" instead of "inFile". This is because we are assuming we wish to output the file we created and wrote before (i.e. with the previous write and append operations).

If there is an incorrect number of command line arguments, we should print the correct message and return 1 as indicated in the examples below.

If the second command line argument is not a valid operator string, we should print the correct message and return 1 as indicated in the examples below.

If the third command line argument is not a valid file path, we should print the correct messages (i.e. one for write/append operations, one for reading) and return 1 as indicated in the examples below.

### IMPORTANT NOTES:

Make use of the **existing functions provided** in "**inc/fileOps.h**" in "**src/fileOps.c**" (i.e. implement the function prototype declarations already included in "inc/fileOps.h"). Also, make sure your error message output to **stderr**.

### Sample outputs:

Sample of improper number of command line arguments:  
<img width="600px" src="https://prog2007.netlify.app/ex15-bad-num-args.png" alt="EX15 Improper Number of Command Line Arguments">

Sample of improper operator:  
<img width="600px" src="https://prog2007.netlify.app/ex15-bad-op.png" alt="EX15 Improper Operator">

Sample of invalid output file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-bad-output-file.png" alt="EX15 Invalid Output File">

Sample of invalid input file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-bad-input-file.png" alt="EX15 Invalid Input File">

Sample of successfully **writing** a line to a file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-write-success-1.png" alt="EX15 Write Success #1">

Sample of current output file contents:  
<img width="600px" src="https://prog2007.netlify.app/ex15-output-1.png" alt="EX15 Output #1">

Sample of successfully **writing** a new line to the file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-write-success-2.png" alt="EX15 Write Success #2">

Sample of current output file contents:  
<img width="600px" src="https://prog2007.netlify.app/ex15-output-2.png" alt="EX15 Output #2">

Sample of successfully **appending** a new line to the file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-append-success-1.png" alt="EX15 Append Success #1">

Sample of current output file contents:  
<img width="600px" src="https://prog2007.netlify.app/ex15-output-3.png" alt="EX15 Output #3">

Sample of successfully **appending** two new lines to the file:  
<img width="600px" src="https://prog2007.netlify.app/ex15-append-success-2.png" alt="EX15 Append Success #2">

Sample of current output file contents:  
<img width="600px" src="https://prog2007.netlify.app/ex15-output-4.png" alt="EX15 Output #4">

Sample of successfully **reading** the file contents:  
<img width="600px" src="https://prog2007.netlify.app/ex15-read-success.png" alt="EX15 Read Success">

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