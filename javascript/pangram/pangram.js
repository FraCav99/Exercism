/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const isPangram = (string) => {
  const regex = /([a-z])(?!.*\1)/g;
  return (string.toLowerCase().match(regex) || []).length === 26;
};
