interface IRectangle {
  width: number;
  height: number;
  getArea(): number;
}

namespace Shapes {
  export class Rectangle implements IRectangle {
    constructor(public width: number, public height: number) {
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }
}

var r1: IRectangle;
r1 = new Shapes.Rectangle(10, 20);
console.log(r1.getArea());