export function isArmstrongNumber(number: number): boolean {
  const strNumber: string = number + '';
  const strNumberSum: number = strNumber
    .split('')
    .map((num: string): number => +num)
    .reduce((prev: number, next: number): number => prev + (next ** strNumber.length), 0);
  return number === strNumberSum;
}
