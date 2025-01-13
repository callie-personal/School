import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] letterGrade = {"A", "B", "C", "D", "F"};
        int[] numberGrade = {4, 3, 2, 1, 0};

        Scanner input = new Scanner(System.in);
        System.out.println("Hello and welcome!");
        System.out.println("Please enter a letter grade: ");
        String gradeInput = input.next();

        for (int i = 0; i < letterGrade.length; i++) {
            if (gradeInput.equals(letterGrade[i])) {
                System.out.println("Your grade is: " + numberGrade[i]);
                break;
            }

        }
    }}