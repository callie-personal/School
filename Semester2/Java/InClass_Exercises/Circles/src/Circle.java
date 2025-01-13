public class Circle {
    private double radius;
    private String colour;

    public Circle(){
        this.setRadius(2);
        this.setColour("green");
    }

    public Circle(double radius){
        this.setRadius(radius);
    }

    public Circle(double radius, String colour){
        this.setRadius(radius);
        this.setColour(colour);
    }

    public double getArea(){
        double area = Math.PI * this.getRadius() * this.getRadius();
        return area;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String toString(){
        return String.format("Radius = %.2f, Colour = %s",this.radius,this.colour);
    }
}
