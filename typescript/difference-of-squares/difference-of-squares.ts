export class Squares {

  constructor(private count: number) {}

  get sumOfSquares(): number {
    return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
  }
  
  get squareOfSum(): number {
    return Math.pow((this.count * (this.count + 1)) / 2, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
