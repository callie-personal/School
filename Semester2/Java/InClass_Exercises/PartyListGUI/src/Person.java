class Person{
    String firstName;
    String lastName;
    boolean isInvited;

    Person(String firstName, String lastName, boolean isInvited) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isInvited = isInvited;
    }
    public String getFullName() {
        return firstName + " " + lastName;
    }

    public boolean getIsInvited(){
        return isInvited;
    }

}



class Friend extends Person{
    private String foodToBring;

    Friend(String firstName, String lastName, boolean isInvited, String foodToBring){
        super(firstName, lastName, isInvited);
        this.foodToBring = foodToBring;
    }

    public String getFoodToBring(){
        return foodToBring;
    }

    public String toString(){
        return getFullName() + " is bringing " + getFoodToBring() + ". They are " + getIsInvited() + " to the party";
    }
}