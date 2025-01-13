package PersonPackage;

public class Staff extends Person{
    private int yearsOfService;

    public int getYearsOfService() {
        return yearsOfService;
    }

    public void setYearsOfService(int yearsOfService) {
        this.yearsOfService = yearsOfService;
    }

    public int getStaffPay() {
        return (yearsOfService * 500) + 50000;
    }

    public Staff(String name, String address, int yearsOfService){
        super(name, address);
        this.yearsOfService = yearsOfService;
    }
    public String toString(){
        return "name = " + getName() + ", address = " + getAddress() + ", years = " + getYearsOfService() + ", pay = $" + getStaffPay();
    }

}
