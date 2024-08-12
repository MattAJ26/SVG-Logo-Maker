const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes');
const path = require('path');

function createLogo(response) {
    let shapeInstance;
    switch(response.shape) {
        case 'Square':
            shapeInstance = new Square(response.shapeColor, response.text, response.textColor);
            break;
        case 'Circle':
            shapeInstance = new Circle(response.shapeColor, response.text, response.textColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(response.shapeColor, response.text, response.textColor);
            break;
        default:
            throw new Error("Unknown shape: " + response.shape);
    }
    const svgLogo = shapeInstance.render();

    const filePath = path.join(__dirname, 'logo.svg');
        fs.writeFile(filePath, svgLogo, (err) => {
        if (err) {
            console.error("Error writing to file", err);
        } else {
            console.log("Logo generated in logo.svg");
        }
    });
}

function init() {
    inquirer
    .prompt(
        [
            {
                type: "input",
                name: "text",
                message: "Enter up to 3 characters for your logo:",
                validate: function(value) {
                    if (value.length <= 3) {
                        return true;
                    } else {
                        return 'Text should be up to 3 characters.';
                    }
                }
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter a color name for your logo text",
            },
            {
                type: "list",
                name: "shape",
                message: "Choose a shape",
                choices: ["Square", "Circle", "Triangle"],
            },
            {
                type: "input",
                name: "shapeColor",
                message: "choose a color for your logo shape",
            },
        ])
        .then((answers) => {
            createLogo(answers);
        })
        .catch(err => {
            console.log(err)
        });
}

init();