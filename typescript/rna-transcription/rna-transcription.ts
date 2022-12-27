export interface RnaMap {[key: string]: string}

export const rnaMap: RnaMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export function toRna(dnaStrand: string): string {
  const isInvalidDna = /[^GCTA]/g.test(dnaStrand);
  if (isInvalidDna) {
    throw new Error('Invalid input DNA.');
  }

  return dnaStrand
    .split('')
    .reduce((rna: string, nextChar: string) => rna + rnaMap[nextChar], '');
}
