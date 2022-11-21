const testing = [
  [(phoneNumber) => /[a-z]/i.test(phoneNumber), 'Letters not permitted'],
  [(phoneNumber) => /[^.+()-\w\s]/.test(phoneNumber), 'Punctuations not permitted'],
  [(phoneNumber) => phoneNumber.length < 10, 'Incorrect number of digits'],
  [(phoneNumber) => phoneNumber.length > 11, 'More than 11 digits'],
  [(phoneNumber) => phoneNumber[0] !== '1', '11 digits must start with 1'],
  [(phoneNumber) => phoneNumber[1] === '0', 'Area code cannot start with zero'],
  [(phoneNumber) => phoneNumber[1] === '1', 'Area code cannot start with one'],
  [(phoneNumber) => phoneNumber[4] === '0', 'Exchange code cannot start with zero'],
  [(phoneNumber) => phoneNumber[4] === '1', 'Exchange code cannot start with one']
];

export const clean = (phoneNumber) => {
  let normalized = phoneNumber.replace(/[-+.\s()]/g, '');
  if (normalized.length === 10) {
    normalized = '1' + normalized;
  }

  testing.forEach(([testFn, errMessage]) => {
    if (testFn(normalized)) {
      throw new Error(errMessage);
    }
  });

  return normalized.slice(1);
}
