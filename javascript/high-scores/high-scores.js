/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export class HighScores {
  constructor(scores) {
    this.scoreList = scores;
  }

  get scores() {
    return this.scoreList;
  }

  get latest() {
    return this.scoreList[this.scoreList.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scoreList);
  }

  get personalTopThree() {
    const sorted = this.scoreList.sort((a, b) => b - a);
    return sorted.slice(0, 3);
  }
}
