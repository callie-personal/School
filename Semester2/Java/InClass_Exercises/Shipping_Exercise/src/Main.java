import java.util.Scanner;

// Name: Callie Pretty
// Class: PROG1400

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        // Press Alt+Enter with your caret at the highlighted text to see how
        // IntelliJ IDEA suggests fixing it.
        double itemPrice;
        int shippingCost = 10;
        double totalCost;


        Scanner input = new Scanner(System.in);
        System.out.println("Hello and welcome!");
        System.out.println("Please enter the item cost: ");
        itemPrice = input.nextInt();
        if (itemPrice < 50){
            totalCost = itemPrice + shippingCost;
        }else {
            totalCost = itemPrice;
        }
        System.out.println("Your total with shipping is: $"+totalCost);
    }
}