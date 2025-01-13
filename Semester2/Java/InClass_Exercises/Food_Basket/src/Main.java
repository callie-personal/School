// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        //creating foods

        Food apple = new Food("apple", "fruit");
        Food greenBeans = new Food("green beans", "vegetable");
        Food steak = new Food("steak", "meat");

        //Create object array
        Food[] picnicBasket = {apple, greenBeans, steak};

        //loop through to find vegetables and deny
        for (Food food : picnicBasket) {
            if ("vegetable".equals(food.type)){
                System.out.println(food.denyIt());
            }
            else {
                System.out.println(food.eatIt());
            }
        }

    }
}