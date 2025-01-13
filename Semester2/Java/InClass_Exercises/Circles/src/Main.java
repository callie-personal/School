// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Circle circleOne = new Circle();
        circleOne.setRadius(10);

        Circle circleTwo = new Circle(3.5);
        circleTwo.setRadius(20);
        circleTwo.setColour("turquoise");

        Circle circleThree = new Circle(5,"red");
        circleThree.setColour("black");


        System.out.println(circleOne.getArea());
        System.out.println(circleTwo.getArea());
        System.out.println(circleThree.getArea());

        System.out.println(circleOne);
        System.out.println(circleTwo);
        System.out.println(circleThree);


    }
}