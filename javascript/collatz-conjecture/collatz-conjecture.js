/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const steps = number => {
  if (number < 1) throw new Error('Only positive numbers are allowed');
  let steps = 0, numCopy = number;

  while(numCopy !== 1) {
    numCopy = numCopy % 2 === 0 ? numCopy / 2 : 3 * numCopy + 1;
    steps++;
  }

  return steps;
};
