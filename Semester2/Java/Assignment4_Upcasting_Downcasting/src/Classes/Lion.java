package Classes;

public class Lion extends Animal{
    private int talisLength;

    public int getTalisLength() {
        return talisLength;
    }

    public void setTalisLength(int talisLength) {
        this.talisLength = talisLength;
    }

    public String toString(){
        return super.toString()+ String.format("My tail's length is %dcm.",this.talisLength);
    }

    public Lion(String pSpecies, double pMaxWeight, String habitat, boolean pIsEndangered, int talisLength) {
        super(pSpecies, pMaxWeight, habitat, pIsEndangered);
        this.talisLength = talisLength;
    }
}
