/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

const toIndividualScores = (score, values) => values.reduce((prevObj, value) => {
  const key = value.toLowerCase();
  return { ...prevObj, [key]: +score };
}, {});

export const transform = oldScores => Object
    .entries(oldScores)
    .map(([score, values]) => toIndividualScores(score, values))
    .reduce((prevObj, currObj) => ({ ...prevObj, ...currObj}), {});