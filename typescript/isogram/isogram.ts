export function isIsogram(text: string): boolean {
  const onlyAlphabetic = text.toLowerCase().match(/[a-z]/g) || [];
  const withoutDuplicated = new Set(onlyAlphabetic);
  return onlyAlphabetic.length === withoutDuplicated.size;
}
