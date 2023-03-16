// generic shape class
class Shape {
    constructor() {
        this.shapeColor = 'white';
    }

    // function to set color for all shapes
    setColor(color) {
        this.shapeColor = color;
    }
}

// triangle class that inherits shape
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // function to return line of code specifying triangle
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

// circle class that inherits shape
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // function to return line of code specifying circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

// square class that inherits shape
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // function to return line of code specifying square
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };