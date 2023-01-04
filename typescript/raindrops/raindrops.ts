export const factorsMap = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

export function convert(number: number): string {
  let result: string = '';
  Object.entries(factorsMap).forEach(([factor, phrase]) => {
    if (number % +factor === 0) {
      result += phrase;
    }
  });
  return result || `${number}`;
}
