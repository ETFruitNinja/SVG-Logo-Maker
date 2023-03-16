const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// produces line of code that generates colored shape
function generateShape(shape, shapeColor) {
    if (shape === 'Triangle') {
        const newTriangle = new Triangle();
        newTriangle.setColor(shapeColor);
        return newTriangle.render();
    } else if (shape === 'Circle') {
        const newCircle = new Circle();
        newCircle.setColor(shapeColor);
        return newCircle.render();
    } else if (shape === 'Square') {
        const newSquare = new Square();
        newSquare.setColor(shapeColor);
        return newSquare.render();
    }
}

// generate text within logo.svg file
const generateSvgText = ({text, textColor, shape, shapeColor}) => 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

${generateShape(shape, shapeColor)}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

// inquirer used to gather info from user regarding logo
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Input logo text (3 character limit):',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Input text color for logo:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Select logo shape:',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            message: 'Input shape color for logo:',
            name: 'shapeColor'
        }
    ])
    .then((data) => {
        const svgConent = generateSvgText(data);

        // creates file for logo.svg based on user input
        fs.writeFile('./examples/logo.svg', svgConent, (err) => 
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    })