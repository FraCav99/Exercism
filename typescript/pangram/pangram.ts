export function isPangram(sentence: string): boolean {
  return new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;
}
