/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

export const gigasecond = (date) => {
  const dateToMs = date.getTime();
  const gigaSecToMs = 10**9 * 1000;
  return new Date(dateToMs + gigaSecToMs);
};
