package classes;

public class Circle extends Shape{
    private double radius;

    public Circle(String shapeName, String shapeColor, double radius) {
        super(shapeName, shapeColor);
        this.setRadius(radius);
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getArea(){
        return this.radius * this.radius * Math.PI;
    }
}
