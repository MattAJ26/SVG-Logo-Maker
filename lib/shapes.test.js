const {Square, Circle, Triangle} = require('./shapes')

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue" />');