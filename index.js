const inquirer = require('inquirer');
const fs = require('fs');
// const shapes = require('./lib/shapes');

// produces line of code that generates colored shape
function generateShape(shape, shapeColor) {
    if (shape === 'Triangle') {
        const newTriangle = new Triangle(shapeColor);
        return newTriangle.render();
    } else if (shape === 'Circle') {
        const newCircle = new Circle(shapeColor);
        return newCircle.render();
    } else if (shape === 'Square') {
        const newSquare = new Square(shapeColor);
        return newSquare.render();
    }
}

// generate text within logo.svg file
// TODO: currently using sample, switch these out with values based on user inputs
const generateSvgText = ({text, textColor, shape, shapeColor}) => 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

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

        fs.writeFile('logo.svg', data, (err) => 
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    })