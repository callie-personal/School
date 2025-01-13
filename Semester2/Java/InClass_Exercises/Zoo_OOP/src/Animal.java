public class Animal {
    //Attributes
    private String species;
    private int maxWeight;
    private String habitat;
    private boolean isEndangered;

    public Animal(){
        this.setSpecies("Cat");
        this.setMaxWeight(12);
        this.setHabitat("Home");
        this.setEndangered(false);
    }

    public Animal(String species, int maxWeight, String habitat, boolean isEndangered) {
        this.setSpecies(species);
        this.setMaxWeight(maxWeight);
        this.setHabitat(habitat);
        this.setEndangered(isEndangered);
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public int getMaxWeight() {
        return maxWeight;
    }

    public void setMaxWeight(int maxWeight) {
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

    //Animal can be fed
    public String feedAnimal(String food){
        return String.format("Feed a %s a %s.",this.species,food);
    }

    //Animal can make a sound
    public String makeSound(String sound){
        sound = "";
        if (this.species.equalsIgnoreCase("cat"))
            sound = "Meow";
        else if (this.species.equalsIgnoreCase("cow"))
            sound = "Moo";
        else if (this.species.equalsIgnoreCase("lion"))
            sound = "Rawr";
        else if (this.species.equalsIgnoreCase("dog"))
            sound = "Woof";
        else
            sound = "Un-specified";
        return String.format("A %s can %s",this.species,sound);
    }

    public String toString(){
        String animalStatus = "not an endangered";
        if (this.isEndangered)
            animalStatus = "an endangered";
        String report = String.format("I am a %dlb %s that lives in the %s.  I am %s species.",this.maxWeight,this.species,this.habitat,animalStatus);
        return report;
    }
}
