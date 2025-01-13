package classes;

public class Shape {
    private String shapeName;
    private String shapeColor;

    public Shape(String shapeName, String shapeColor) {
        this.setShapeName(shapeName);
        this.setShapeColor(shapeColor);
    }

    public double getArea(){
        return 0;
    }

    public String getShapeName() {
        return shapeName;
    }

    public void setShapeName(String shapeName) {
        this.shapeName = shapeName;
    }

    public String getShapeColor() {
        return shapeColor;
    }

    public void setShapeColor(String shapeColor) {
        this.shapeColor = shapeColor;
    }
}
