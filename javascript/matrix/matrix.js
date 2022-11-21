/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
  }

  get rows() {
    return this.matrixString
      .split('\n')
      .map(row => row.split(' ').map(num => +num));
  }

  get columns() {
    return this.rows[0].map((col, index) => this.rows.map(row => row[index]));
  }
}
