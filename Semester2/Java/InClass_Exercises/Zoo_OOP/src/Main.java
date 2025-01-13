import java.sql.SQLOutput;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        System.out.println("Animal at a Zoo example");

        Animal myCat = new Animal();
        System.out.println(myCat.getHabitat());
        System.out.println(myCat.getMaxWeight());

        Animal[] zoo = new Animal[3];

        zoo[0] = (new Animal("Dog",30,"Home",false));
        zoo[1] = (new Animal("Lion",500,"Jungle",true));
        zoo[2] = (new Animal("Cow", 900, "Farm", false));

        for (Animal myAnimal:zoo) {
            System.out.println(myAnimal.makeSound("Woof"));
            System.out.println(myAnimal.feedAnimal("Grass"));
            System.out.println(myAnimal);
            System.out.println("-".repeat(50));
        }

        zoo[0].setEndangered((false));
        zoo[1].setMaxWeight(600);
        System.out.println(zoo[1].getMaxWeight());
        System.out.println(zoo[0].isEndangered());
    }
}