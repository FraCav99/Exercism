/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = (values) => {
  const firstBand = COLORS.indexOf(values[0]),
        secondBand = COLORS.indexOf(values[1]);

  return +`${firstBand}${secondBand}`;
}
