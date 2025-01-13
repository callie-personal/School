public class Food {
    String name;
    String type;

    //Food constructor
    public Food(String name, String type){
        this.name = name;
        this.type = type;
    }

    //method for eating the food
    public String eatIt() {
        return "You just ate the " + name + ".";
    }

    //method to refuse the food
    public String denyIt() {
        return "Not eating that!  I hate " + type + "s!";
    }
}
