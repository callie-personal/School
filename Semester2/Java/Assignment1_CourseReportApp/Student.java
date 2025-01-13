public class Student {
    //Attributes
    String stdName;
    double assignmentOne;
    double assignmentTwo;
    double totalMarks;

    //Constructors

    public Student(String stdName, double assignmentOne, double assignmentTwo){
        this.stdName = stdName;
        this.assignmentOne = assignmentOne;
        this.assignmentTwo = assignmentTwo;
        //calculate the total marks for each student
        this.totalMarks = this.assignmentOne + this.assignmentTwo;
    }

    //Methods
    public String stdReport(){
        String report = String.format("%S:\tAssignment1 - %.2f\tAssignment2 - %.2f\tTotal - %.2f",
                this.stdName,this.assignmentOne, this.assignmentTwo, this.totalMarks);
        return report;
    }
}
