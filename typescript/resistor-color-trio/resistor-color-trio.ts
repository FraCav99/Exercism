export interface ColorCode { [key: string]: number}

export const COLOR_CODE: ColorCode = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}

export function decodedResistorValue([firstBand, secondBand, digits]: string[]): string {
  const repeatedDigits = '0'.repeat(COLOR_CODE[digits]);
  const number = +`${COLOR_CODE[firstBand]}${COLOR_CODE[secondBand]}${repeatedDigits}`;
  return number < 1000 ? `${number} ohms` : `${number / 1000} kiloohms`;
}
