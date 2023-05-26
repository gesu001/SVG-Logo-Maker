const { Square, Circle, Triangle } = require('./shapes.js')

describe('Shapes', () => {
  describe('Square', () => {
    it('should render square shape', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<rect x="60" y="60" width="180" height="180" fill="blue"/>`)
    });
  });
})

describe('Shapes', () => {
  describe('Circle', () => {
    it('should render circle shape', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<circle cx="150" cy="150" r="80" fill="blue"/>`)
    });
  });
})

describe('Shapes', () => {
    describe('Triangle', () => {
      it('should render triangle shape', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(`<polygon points="20, 240 150, 20 280, 240" fill="blue"/>`)
      });
    });
  })