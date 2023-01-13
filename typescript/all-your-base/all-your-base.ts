export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  const errorMessage: string | null = errorChecker(digits, inputBase, outputBase);
  if (errorMessage !== null) {
    throw new Error(errorMessage);
  }

  const convertToBaseTen: number = toBaseTen(digits, inputBase);
  return convertToBaseTen > 0 ? extractConvertedDigits(convertToBaseTen, outputBase) : [0];
}

function extractConvertedDigits(quotient: number, outputBase: number): number[] {
  const convertedBaseDigits: number[] = [];
  while(quotient > 0) {
    const reminder = quotient % outputBase;
    convertedBaseDigits.push(reminder);
    quotient = Math.floor(quotient / outputBase);
  }

  return convertedBaseDigits.reverse();
}

function toBaseTen(digits: number[], inputBase: number): number {
  const maxExponent = digits.length - 1;
  return digits.reduce((acc, digit, index) =>
    acc + (digit * Math.pow(inputBase, maxExponent - index)), 0
  );
}

function errorChecker(
  digits: number[],
  inputBase: number,
  outputBase: number
): string | null {
  const isValidInputBase = inputBase >= 2 && Number.isInteger(inputBase);
  if (!isValidInputBase) {
    return 'Wrong input base';
  }

  const isValidOuputBase = outputBase >= 2 && Number.isInteger(outputBase);
  if (!isValidOuputBase) {
    return 'Wrong output base';
  }

  const hasMultipleZeros = digits.length > 1 && digits.every(digit => digit === 0);
  const hasLeadingZeros = digits.length > 1 && digits[0] === 0 && digits[digits.length - 1] === 0;
  const hasNegativeDigits = digits.some(digit => digit < 0);
  const hasInvalidPositiveDigits = digits.some(digit => digit >= inputBase);
  const isEmpty = digits.length === 0;
  if (
    hasMultipleZeros ||
    hasLeadingZeros ||
    hasNegativeDigits ||
    hasInvalidPositiveDigits ||
    isEmpty
  ) {
    return 'Input has wrong format';
  }

  return null;
}
