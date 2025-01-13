package classes;

public class Triangle extends Shape{
    private double base;
    private double height;

    public Triangle(String shapeName, String shapeColor, double base, double height) {
        super(shapeName, shapeColor);
        this.setBase(base);
        this.setHeight(height);
    }


    public double getBase() {
        return base;
    }

    public void setBase(double base) {
        this.base = base;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getArea(){
        return (this.base * this.height) / 2;
    }
}
