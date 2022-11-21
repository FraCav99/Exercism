/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    return this._isValid() && this.sides.every(side => side === this.sides[0]);
  }

  get isIsosceles() {
    const [x, y, z] = this.sides;
    const hasTwoSidesEquals = x === y || y === z || z === x;
    return this._isValid() && hasTwoSidesEquals;
  }

  get isScalene() {
    const [x, y, z] = this.sides;
    return this._isValid() && (x !== y && y !== z && x !== z);
  }

  _isValid() {
    const [x, y, z] = this.sides,
          allSidesGreaterThanZero = this.sides.every(side => side > 0),
          isValidTriangle = x + y >= z && x + z >= y && y + z >= x;

    return allSidesGreaterThanZero && isValidTriangle;
  }
}
