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
  const number = ((COLOR_CODE[firstBand] * 10) + COLOR_CODE[secondBand]) * (10 ** COLOR_CODE[digits]);
  return number < 1000 ? `${number} ohms` : `${number / 1000} kiloohms`;
}
