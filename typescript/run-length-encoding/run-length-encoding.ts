export function encode(toEncode: string): string {
  return toEncode.replace(/([ \w])\1+/g, (group, char) => group.length + char);
}

export function decode(toDecode: string): string {
  return toDecode.replace(/(\d+)([ \w])/g, (_, count, char) => char.repeat(count));
}
