package PersonPackage;

public class Student extends Person{
    private int year;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getStudentFee(){
        return (year * 100) + 3000;
    }

    public Student(String name, String address, int year){
        super(name, address);
        this.year = year;
    }
    public String toString(){
        return "name = " + getName() + ", address = " + getAddress() + ", year = " + getYear() + ", fee = $" + getStudentFee();
    }
}
