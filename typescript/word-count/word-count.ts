export function count(text: string): Map<string, number> {
  const matches = text.trim().toLowerCase().match(/(?:\S)+/g) || [];

  const obj: {[key: string]: number} = {};
  matches.forEach((word: string) => {
    if (Object.hasOwn(obj, word)) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  });

  return new Map(Object.entries(obj));
}
