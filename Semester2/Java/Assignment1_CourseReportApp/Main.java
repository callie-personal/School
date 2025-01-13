import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String name;
        double assignment1, assignment2;
        //Arrays of student objects
        Course[] courses = new Course[2];
        Student[] javaStudents = new Student[6];
        Student[] pythonStudents = new Student[6];
        double javaTotalAssignment1 = 0,javaTotalAssignment2 = 0;
        double pythonTotalAssignment1 = 0,pythonTotalAssignment2 = 0;
        double javaAssignment1Average,javaAssignment2Average;
        double pythonAssignment1Average,pythonAssignment2Average;

        System.out.println("Programming IT Courses");
        System.out.println("Course Entry:");
        printTheLine();
        for (int i = 0; i < courses.length; i++) {
            System.out.println(String.format("Enter name for course # %d:",i + 1));
            courses[i] = new Course(sc.nextLine());
        }

            System.out.println("Enter students for " + courses[0].getCoursesName() + ": ");
            for (int i = 0; i < javaStudents.length; i++) {
                System.out.println(String.format("Enter name for student = %d:", (i + 1)));
                name = sc.nextLine();
                System.out.println(String.format("Enter Assignment1 mark for %S:",
                        name));
                assignment1 = sc.nextDouble();
                assignment1 = validateMark(assignment1, sc);
                System.out.println(String.format("Enter Assignment2 mark for %S:",
                        name));
                assignment2 = sc.nextDouble();
                sc.nextLine();
                assignment2 = validateMark(assignment2, sc);
                javaStudents[i] = new Student(name, assignment1, assignment2);
                //Calculate the total mark of assignment1 for all of the 6 students
                javaTotalAssignment1 += assignment1;
                //Same for assignment 2
                javaTotalAssignment2 += assignment2;
            }

        System.out.println("Enter students for " + courses[1].getCoursesName() + ": ");
        for (int i = 0; i < pythonStudents.length; i++) {
            System.out.println(String.format("Enter name for student = %d:", (i + 1)));
            name = sc.nextLine();
            System.out.println(String.format("Enter Assignment1 mark for %S:",
                    name));
            assignment1 = sc.nextDouble();
            assignment1 = validateMark(assignment1, sc);
            System.out.println(String.format("Enter Assignment2 mark for %S:",
                    name));
            assignment2 = sc.nextDouble();
            sc.nextLine();
            assignment2 = validateMark(assignment2, sc);
            pythonStudents[i] = new Student(name, assignment1, assignment2);
            //Calculate the total mark of assignment1 for all of the 6 students
            pythonTotalAssignment1 += assignment1;
            //Same for assignment 2
            pythonTotalAssignment2 += assignment2;
        }

        //Access course names

        //Calculating the courses average

        javaAssignment1Average = javaTotalAssignment1/6;
        javaAssignment2Average = javaTotalAssignment2/6;
        pythonAssignment1Average = pythonTotalAssignment1/6;
        pythonAssignment2Average = pythonTotalAssignment2/6;
        courses[0].assign1Average = javaAssignment1Average;
        courses[0].assign2Average = javaAssignment2Average;
        courses[1].assign1Average = pythonAssignment1Average;
        courses[1].assign2Average = pythonAssignment2Average;
        courses[0].calculateCourseAverage();
        courses[1].calculateCourseAverage();

        System.out.println("REPORT: Stats per Course");
        printTheLine();
        System.out.println(courses[0].coursesReport());
        System.out.println(courses[1].coursesReport());

        //Report: Stats per student
        System.out.println("REPORT: Stats per student");
        printTheLine();
        System.out.println(courses[0].getCoursesName());
        for (int i = 0; i < javaStudents.length;i++) {
            System.out.println(javaStudents[i].stdReport());
        }
        printTheLine();
        System.out.println(courses[1].getCoursesName());
        for (int i = 0; i < pythonStudents.length;i++) {
            System.out.println(pythonStudents[i].stdReport());
        }
    }
    //Other methods in the Main class scope
    public static void printTheLine(){
        System.out.println("=".repeat(40));
    }
    //method to validate that the mark is between 0.0 and 100.0
    public static double validateMark(double mark, Scanner sc) {
        while (mark < 0.0 || mark > 100.0) {
            System.out.println("Invalid mark, please enter a value between 0.0 and 100.0.");
            mark = sc.nextDouble();
        }
        return mark;
    }
}


