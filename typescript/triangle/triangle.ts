export class Triangle {

  sides: number[];
  isValid: boolean;
  sideSet: Set<number>;

  constructor(...sides: number[]) {
    this.sides = [...sides].sort((a, b) => a - b);
    this.sideSet = new Set(sides);
    this.isValid = this.sides[0] > 0 && this.sides[0] + this.sides[1] >= this.sides[2];
  }

  get isEquilateral() {
    return this.isValid && this.sideSet.size === 1;
  }

  get isIsosceles() {
    return this.isValid && this.sideSet.size <= 2;
  }

  get isScalene() {
    return this.isValid && this.sideSet.size === 3;
  }
}
