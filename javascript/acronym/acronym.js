/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const parse = phrase => {
  return phrase.toUpperCase()
    .split(/[\s_!.?-]/g)
    .filter(word => word !== '')
    .map(word => word.charAt(0))
    .join('');
};
