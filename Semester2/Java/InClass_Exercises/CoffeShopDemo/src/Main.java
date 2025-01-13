import java.util.Scanner;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to the Coffee Shop!");
        //1. Input:
        double priceOfCup = 1.25;
        int numOfCups;
        double preTaxTotal;
        double finalTotal;
        double priceOfCake = 3.25;
        int numOfCake;

        //I will declare a scanner object:
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to our Coffee Shop: ");
        System.out.println("Enter the number of cups: ");
        numOfCups = input.nextInt();
        System.out.println("Enter the number of cake pieces: ");
        numOfCake = input.nextInt();

        //2. Processing:
        preTaxTotal = (numOfCups * priceOfCup) + (numOfCake * priceOfCake);
        finalTotal = preTaxTotal * 1.15;
        //3. Output:
        System.out.println("Your pretax total is: $"+preTaxTotal);
        System.out.println("Your final total is: $"+finalTotal);
    }
}