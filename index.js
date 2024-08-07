const inquirer = require('inquirer');
const fs = require("fs");
const {Square, Circle, Triangle} = require('./lib/shapes');

function createLogo(response) {
    let svgLogo;
    switch(response.shape) {
        case 'Square':
            svgLogo = new Square(response);
            break;
        case 'Circle':
            svgLogo = new Circle(response);
            break;
        case 'Triangle':
            svgLogo = new Triangle(response);
            break;
        default:
            throw new Error("Unknown shape: " + response.shape);
    }
    fs.writeFile('logo.svg', svgLogo, (err) => {
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
                name: "logo text",
                message: "Enter up to 3 characters for your logo:",
            },
            {
                type: "input",
                name: "text color",
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
                name: "shape color",
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