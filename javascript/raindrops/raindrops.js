/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const convert = (number) => {
  let raindrops = '';
  if (number % 3 === 0) {
    raindrops += 'Pling';
  }
  if (number % 5 === 0) {
    raindrops += 'Plang';
  }
  if (number % 7 === 0) {
    raindrops += 'Plong';
  }

  return raindrops.length > 0 ? raindrops : number + '';
};
