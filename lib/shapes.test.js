const Shapes = require('shapes.js');

// created testing suite for Triangle
describe('Triangle', ()=> {
    // test created to check that render produces a line of SVG code producing a blue triangle
    describe('render', ()=> {
        it('Should return a line of SVG code specifying a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})

