export class Anagram {

  constructor(private input: string) {}

  public matches(...potentials: string[]): string[] {
    return potentials.filter(word => this.testAnagram(word, this.input));
  }

  private testAnagram(word: string, input: string): boolean {
    const wordLowerCase = word.toLowerCase();
    const inputLowerCase = input.toLowerCase();
    const sortedWord = [...wordLowerCase].sort().join('');
    const sortedInput = [...inputLowerCase].sort().join('');
    return (wordLowerCase !== inputLowerCase) && (sortedWord === sortedInput);
  }
}
