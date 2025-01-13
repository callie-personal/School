<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2007 - Exercise 7

## Task
You will create a header file called "**inc/highScores.h**" that has two structs defined in it.  The first struct will look like the **Date** one from the textbook examples from Chapter 8. The second struct will be called **Player** and will contain a string for the **userName** and **score**. It will also contain a **date** (i.e. using the first struct) of the date the high score was recorded.

In **main.c** (which you must move into a "**src**" subfolder), ask the user to enter the relevant details for each user, score, and date in a loop until they enter a "Q" for the user name. Store each entry within an **array of Player structs**. The array can have a max size of 5 but may store less scores depending on when the user enters a "Q". In the example shown below, there are only two entries and in the tests there will be three.

Then, in "**inc/highScores.h**" declare a void returning function called:  
printHighScores(int bestPlayerCount, struct Player *bestPlayers)

Implement that function in a new source file called "**src/highScores.c**". Have the function nicely print out all the entered high scores as shown in the example below after "Q" has been entered.

### Sample outputs:

Sample of proper input of 2 scores:  
<img width="400px" src="https://prog2007.netlify.app/ex7-success.png" alt="EX7 Success">

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