/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const isIsogram = (word) => {
  const lowercaseWord = word.toLowerCase();
  const regex = /(\w).*\1/;
  return !regex.test(lowercaseWord);
};
