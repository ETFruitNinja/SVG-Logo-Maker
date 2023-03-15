const { Triangle, Circle, Square } = require('./shapes.js');

// created testing suite for Shapes
describe('Shapes', ()=> {
    describe('Triangle', ()=> {
        // test created to check that render produces a line of SVG code producing a blue triangle
        describe('render', ()=> {
            it('Should return a line of SVG code specifying a blue triangle', () => {
                const shape = new Triangle();
                shape.setColor('blue');
                expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            })
        })
    })

    describe('Circle', ()=> {
        // test created to check that render produces a line of SVG code producing a red circle
        describe('render', ()=> {
            it('Should return a line of SVG code specifying a red circle', () => {
                const shape = new Circle();
                shape.setColor('red');
                expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
            })
        })
    })

    describe('Square', ()=> {
        // test created to check that render produces a line of SVG code producing a yellow square
        describe('render', ()=> {
            it('Should return a line of SVG code specifying a yellow square', () => {
                const shape = new Square();
                shape.setColor('yellow');
                expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="yellow"/>');
            })
        })
    })
})

