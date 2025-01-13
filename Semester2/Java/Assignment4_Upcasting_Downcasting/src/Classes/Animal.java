package Classes;

import org.w3c.dom.ls.LSOutput;

public class Animal {
//    Define Animal Class with four properties:
//            1. Species -ex. Lion, cow or anything else.
//            2. Max Weight – The maximum average weight of an adult of the species.
//            3. Habitat – ex. Jungle, ocean, or mountain, … etc.
//      4. Is Endangered- Flag to indicate whether the animal species is endangered.
    private String species;
    private double maxWeight;
    private String habitat;
    private boolean isEndangered;

//    Step2:
//    Add a default constructor, with any default values that you feel be required.
    //It is the user defined constructor without parameters
    public Animal(){
        this.setSpecies("Dog");
        this.setMaxWeight(30);
        this.setHabitat("Home");
        this.setEndangered(false);
    }
//    Step3:
//    Add a parametrized constructor to allow setting of all properties on object creation.
    public Animal(String pSpecies, double pMaxWeight, String habitat, boolean pIsEndangered){
        this.setSpecies(pSpecies);
//        this.species = pSpecies;
        this.setMaxWeight(pMaxWeight);
        this.setHabitat(habitat);
        this.setEndangered(pIsEndangered);
    }


//    Step4:
//    Determine scope/access of properties:
//            - Are they completely internal to the class? ====> private
//            - should an external class be permitted to read the property values? ==>public or protected
//            - should an external class be permitted to change the property values? ==>public or protected
//    It is done before

//    Step 5:
//    Create appropriate Getter/Setter methods, as required.
public String getSpecies() {
    return species;
}

    public void setSpecies(String species) {
        this.species = species;
    }

    public double getMaxWeight() {
        return maxWeight;
    }

    public void setMaxWeight(double maxWeight) {
        this.maxWeight = maxWeight;
    }

    public String getHabitat() {
        return habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }

    public boolean isEndangered() {
        return isEndangered;
    }

    public void setEndangered(boolean endangered) {
        isEndangered = endangered;
    }
//    Step 6:
//    Create three methods, i.e., actions that Animal instances can do, or that involve Animal objects.
//- Animal can be fed-ex. Feed a Tiger a Steak.
//- Animal can make sound-ex. A Cow can “moo”.
//  - In our program, an animal can report its state. (Use toString()):
//            *. Ex., “I am a 500Ib tiger that lives in the jungle. I am an Endangered species.”
//            - Note: Let’s do all console printing in Main(), not in Animal.
    public String feedAnimal(){
        return "Feed a "+this.species +" a Steak";
    }
    public String makeSound(){
        String sound = "Unspecified";
        return String.format("A %s can make %s sound", this.species,sound);
    }


    public String toString(){
        String animalStatus = "not an Endangered";
        if (this.isEndangered){
            animalStatus = "an Endangered";
        }

        return String.format("I am a %.2f Ib %s that lives in the %s. I am %s species.",
                  this.maxWeight,this.species,this.habitat,animalStatus );
    }












}
