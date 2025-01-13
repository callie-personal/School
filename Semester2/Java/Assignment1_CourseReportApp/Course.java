public class Course {
    //Attributes
    String coursesName;
    double assign1Average;
    double assign2Average;
    double coursesAverage;

    //Constructors
    public Course(String coursesName){
        this.coursesName = coursesName;
        this.assign1Average = 0.0; // Initialize to 0
        this.assign2Average = 0.0; // Initialize to 0
        this.coursesAverage = 0.0; // Initialize to 0
    }

    public String getCoursesName(){
        return coursesName;
    }

    //Methods
    public String courseRating(){
        String rate;
        if (this.coursesAverage >= 90)
            rate = "A";
        else if (this.coursesAverage >= 80)
            rate = "B";
        else if (this.coursesAverage >=  70)
            rate = "C";
        else if (this.coursesAverage >= 60)
            rate = "D";
        else
            rate = "F";
        return rate;
    }
    public String coursesReport(){
       String coursesReport = String.format("%s : Assignment1 - %.2f Assignment2 - %.2f Average - %.2f\n" +
               "Course Rating: %s",
               this.coursesName,this.assign1Average,this.assign2Average,this.coursesAverage,courseRating());
       return coursesReport;
    }
    public void calculateCourseAverage() {
        coursesAverage = (assign1Average + assign2Average) / 2;
    }
}
