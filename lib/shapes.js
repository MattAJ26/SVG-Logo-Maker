class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill=${this.shapeColor}/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg`
    }
};

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill=${this.shapeColor}/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill=${this.shapeColor}/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

module.exports = {Square, Circle, Triangle}