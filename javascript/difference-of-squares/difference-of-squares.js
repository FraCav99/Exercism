export class Squares {
  constructor(squares) {
    this._squares = squares;
  }

  get sumOfSquares() {
    return (this._squares * (this._squares + 1) * (2 * this._squares + 1)) / 6;
  }

  get squareOfSum() {
    return ((this._squares * (this._squares + 1)) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
