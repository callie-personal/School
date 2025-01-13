
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 9

## Task

We will create a program that performs some "string" operations based on an inputted sentence.

### STEP 1:
You will create a header file called "**inc/stringOperations.h**" that has a single (for now) function declaration:  
*int charCount(char inputString[], char letterToFind);*

Then create a new source file called "**src/stringOperations.c**" that implements that function. The function should return a count of how many times the character "letterToFind" appears in the inputString. This count should include the letter in both lower and uppercase no matter how it is passed in to the function.

**Now, uncomment the code block marked "BLOCK 1" in main.c.**

You should see the following output using these inputs and tests #1 and #3 should pass:
    <img width="600px" src="https://prog2007.netlify.app/ex9-block-a.png" alt="EX9 Block A">
    <img width="600px" src="https://prog2007.netlify.app/ex9-block-a-part2.png" alt="EX9 Block A - Part 2">

**NOTE:** Try to understand how my "Block 1" code reads in an entire sentence and a character afterwards even if a newline might still be in the input buffer. You may also want to look for the include and the code that always outputs the letter in uppercase.

### STEP 2:
You will add a function declaration to "**inc/stringOperations.h**" as follows:  
*bool containsWord(char inputString[], char wordToFind[]);*

Then implement the new function in "**src/stringOperations.c**". The function should return true if "wordtoFind" appears in the inputString and false otherwise.

**NOTE**: Look up the **strtok** function to split the sentence into words on each space. Depending on how you use **strtok**, you might need to copy inputString into another string in the function so as not to modify the original value.

**Now, uncomment the code block marked "BLOCK 2" in main.c.**

You should see the following output using these inputs and all tests should now pass:
    <img width="600px" src="https://prog2007.netlify.app/ex9-success.png" alt="EX9 Success">
    <img width="600px" src="https://prog2007.netlify.app/ex9-success-part2.png" alt="EX9 Success - Part 2">

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