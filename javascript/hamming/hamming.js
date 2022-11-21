/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length) {
    throw new Error('strands must be of equal length');
  }
  
  return strand1
    .split('')
    .filter((el, index) => el !== strand2[index]).length;
};
