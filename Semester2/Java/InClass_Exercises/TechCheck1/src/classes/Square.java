package classes;

public class Square extends Shape{
    private double length;
    private double width;

    public Square(String shapeName, String shapeColor, double length, double width) {
        super(shapeName, shapeColor);
        this.setLength(length);
        this.setWidth(width);
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getArea(){
        return this.length * this.width;
    }
}
