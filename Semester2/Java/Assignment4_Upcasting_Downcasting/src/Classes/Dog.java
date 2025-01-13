package Classes;

public class Dog extends Animal {
    private String dogBreed;

    public String getDogBreed() {
        return dogBreed;
    }

    public void setDogBreed(String dogBreed) {
        this.dogBreed = dogBreed;
    }

    public Dog(String pSpecies, double pMaxWeight, String habitat, boolean pIsEndangered, String dogBreed) {
        super(pSpecies, pMaxWeight, habitat, pIsEndangered);
        this.dogBreed = dogBreed;
    }
    public String makeSound(){
        //return String.format("A %s can make a Meow sound", this.getSpecies());
        return String.format("A %s can make a Woof sound", super.getSpecies());
    }
    public String toString(){
        return super.toString()+ String.format("My breed is %s.",this.dogBreed);
    }

}
