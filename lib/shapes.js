// TODO: add shape classes
class Shape {
    constructor() {
        this.shapeColor = 'white';
    }

    setColor(color) {
        this.shapeColor = color;
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

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };