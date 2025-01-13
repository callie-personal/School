import classes.Circle;
import classes.Square;
import classes.Triangle;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        System.out.println("Tech check 1");

        Circle myCircle = new Circle("Circle", "Red", 10);
        Square mySquare = new Square("Square", "Blue", 10,10);
        Triangle myTriangle = new Triangle("Triangle", "Green", 10, 5);

        System.out.println("The Circle's area is: " + myCircle.getArea());
        System.out.println("The Square's area is: " + mySquare.getArea());
        System.out.println("The Triangle's area is: " + myTriangle.getArea());

    }
}