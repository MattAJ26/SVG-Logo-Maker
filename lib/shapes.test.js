const { Square, Circle, Triangle } = require('./shapes')

describe('Triangle', () => {
    describe('render() method', () => {
        it('Should return an svg logo that reflects user input', () => {
            const shapeColor = 'red';
            const text = 'SVG';
            const textColor = 'blue';
            const shape = new Triangle(shapeColor, text, textColor);
            expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="${shapeColor}"/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`);
        })
    })
})

describe('Square', () => {
    describe('render() method', () => {
        it('Should return an svg logo that reflects user input', () => {
            const shapeColor = 'yellow';
            const text = 'AAA';
            const textColor = 'green';
            const shape = new Square(shapeColor, text, textColor);
            expect(shape.render()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}"/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`);
        })
    })
})

describe('Circle', () => {
    describe('render() method', () => {
        it('Should return an svg logo that reflects user input', () => {
            const shapeColor = 'purple';
            const text = 'WOW';
            const textColor = 'yellow';
            const shape = new Circle(shapeColor, text, textColor);
            expect(shape.render()).toEqual(`<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="${shapeColor}"/>
        <text x="150" y="100" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`);
        })
    })
})