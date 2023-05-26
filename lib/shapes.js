class Shapes {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = (color);
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="60" y="60" width="180" height="180" fill="${this.color}"/>`;
    }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`;
    }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="20, 240 150, 20 280, 240" fill="${this.color}"/>`;
    }
}


module.exports = { Square, Circle, Triangle }