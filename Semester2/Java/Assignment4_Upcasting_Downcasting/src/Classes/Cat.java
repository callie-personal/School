package Classes;

public class Cat extends Animal {
    //The cat class will inherit form Animal class
    // It will have access to thefollowimg:
    // 1. Can use the Animal's properties.
    //2. It can use getters and setters and all other methods.
    //3. It will have the access to the Animal's comnstructor.

    // The cat properties
    private int whiskersLength;

    //The Cat's constructor:
    public Cat(String pSpecies, double pMaxWeight, String habitat, boolean pIsEndangered,
               int pWhiskersLength ){
        super(pSpecies,pMaxWeight,habitat,pIsEndangered);//I am calling the Animal constructor

        this.whiskersLength=pWhiskersLength;

    }
    public String makeSound(){
        //return String.format("A %s can make a Meow sound", this.getSpecies());
        return String.format("A %s can make a Meow sound", super.getSpecies());
    }
    public String toString(){
        return super.toString()+ String.format("My Whiskers length is %dcm.",this.whiskersLength);
    }
    public String feedAnimal(String food){
        return String.format("Feed a %s the %s",this.getSpecies(),food);

    }

}
