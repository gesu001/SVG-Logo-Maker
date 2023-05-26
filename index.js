// Include packages needed for this application
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Square, Circle, Triangle } = require('./lib/shapes.js');

//Create a class with render method to generate svg file content 
class CreateSvg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    setTextElement(text, textColor) {
        this.textElement = `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeElement}
        ${this.textElement}
        </svg>`
    }
}
// Create queations to collect user input
const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (Must no more than 3 charaters):',
      },
      {
          type: 'input',
          name: 'textColor',
          message: 'Enter a text color:',
        },
      {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Square', 'Circle', 'Triangle'],
      },
      {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color:',
        },
    ]

//Create a function to generate a svg file
function writeToFile(data) {
    const svg = new CreateSvg();
    svg.setTextElement(data.text, data.textColor);
    svg.setShapeElement(shape);
    const svgString = svg.render();
    writeFile(
        join(__dirname, 'logo.svg'), 
        svgString
        )
    .then(() => console.log('Generate logo.svg'))
    .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
    });
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        if(data.shape === 'Square') {
            shape = new Square()
        } else if(data.shape === 'Circle') {
            shape = new Circle()
        } else {
            shape = new Triangle()
        }
        shape.setColor(data.shapeColor)

        writeToFile(data);
  });
}

// Function call to initialize app
init();
