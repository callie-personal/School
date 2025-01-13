import PersonPackage.Person;
import PersonPackage.Student;
import PersonPackage.Staff;

import javax.swing.JOptionPane;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        //create arraylists for students/staff
        ArrayList<Person> studentList = new ArrayList<>();
        ArrayList<Person> staffList = new ArrayList<>();

        while (true) {
            // Show the option dialog with student/staff/finish buttons
            int result = JOptionPane.showOptionDialog(
                    null,
                    "Select Student or Staff or Finish.",
                    "Accounting App",
                    JOptionPane.YES_NO_CANCEL_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    new Object[]{"Student", "Staff", "Finish"},
                    "Student");

            if (result == JOptionPane.CLOSED_OPTION || result == 2) {
                //exit the loop if user selects "finish"
                break;
            } else if (result == 0) {
                //user selects "student"
                processStudentInput(studentList);
            } else if (result == 1) {
                //user selects "staff"
                processStaffInput(staffList);
            }
        }
        //print out the information for both arrays
        printPersonArray(studentList, staffList);

    }
    private static void processStudentInput (ArrayList < Person > studentList) {
        //prompt user for student information
        String name = JOptionPane.showInputDialog("Enter Student name:");
        String address = JOptionPane.showInputDialog("Enter Student address:");
        String yearStr = JOptionPane.showInputDialog("Enter Student year:");
        int year = Integer.parseInt(yearStr);

        //create a student object, add it to the array list
        Student student = new Student(name, address, year);
        studentList.add(student);
    }

    private static void processStaffInput (ArrayList < Person > staffList) {
        //prompt user for staff information
        String name = JOptionPane.showInputDialog("Enter Staff name:");
        String address = JOptionPane.showInputDialog("Enter Staff address:");
        String yearsOfService = JOptionPane.showInputDialog("Enter Staff years of service:");
        int year = Integer.parseInt(yearsOfService);

        //create a staff object, add it to the array list
        Staff staff = new Staff(name, address, year);
        staffList.add(staff);
    }

    private static int calculateIncomingFees(ArrayList<Person> studentList) {
        int totalFees = 0;
        //iterate through studentList to add up all the incoming fees
        for (Person person : studentList) {
            if (person instanceof Student) {
                totalFees += ((Student) person).getStudentFee();
            }
        }
        //fees divided by 2 as per instructions
        return totalFees / 2;
    }

    private static int calculateOutgoingPay(ArrayList<Person> staffList){
        int totalPay = 0;
        //iterate through staffList and add up total outgoing pay
        for (Person person : staffList){
            if (person instanceof Staff){
                totalPay += ((Staff) person).getStaffPay();
            }
        }
        //pay divided by 26 as per instructions
        return totalPay / 26;
    }

    private static void printPersonArray(ArrayList<Person> studentList, ArrayList<Person> staffList) {
        //start building a new string
        StringBuilder personInfo = new StringBuilder("Students: [Total: " + studentList.size() +"]\n");
        int studentCount = 1;
        int staffCount = 1;
        //iterate through studentList and print each student
        for (Person person : studentList) {
            //studentCount prints an incrementing count for students
            personInfo.append(studentCount++).append(". ").append(person.toString()).append("\n");
        }

        personInfo.append("\nStaff [Total: " + staffList.size() + "]\n");
        //iterate through staffList and print each staff member
        for (Person person : staffList) {
            //staffCount prints an incrementing count for staff
            personInfo.append(staffCount++).append(". ").append(person.toString()).append("\n");

        }
        //methods to caclulate the fees/pay
        int incomingFees = calculateIncomingFees(studentList);
        int outgoingPay = calculateOutgoingPay(staffList);
        //print the outgoing/incoming fees and the difference
        personInfo.append("\n\nResults:\nOutgoing: $" + outgoingPay + "\nIncoming: $" + incomingFees + "\nTotal: $" + (incomingFees - outgoingPay));

        JOptionPane.showMessageDialog(null, personInfo.toString(), "Student & Staff Information", JOptionPane.INFORMATION_MESSAGE);
    }


}
