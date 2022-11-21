/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

const COMPLEMENTS = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = (dna) => dna.split('').map(el => COMPLEMENTS[el]).join('');
