// TODO: add shape classes
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setColor(color) {
        this.ShapeColor = color;
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
}