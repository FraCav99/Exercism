export function parse(phrase: string): string {
  return phrase
    .split(/[^\w]+/)
    .flatMap((word) => word.match(/[A-Z][a-z]+/g) ?? word)
    .reduce((acronym, word) => acronym + word[0], '')
    .toUpperCase();
}
