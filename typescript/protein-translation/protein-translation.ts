export enum AminoAcids {
  METHIONINE = 'Methionine',
  PHENYLALANINE = 'Phenylalanine',
  LEUCINE = 'Leucine',
  SERINE = 'Serine',
  TYROSINE = 'Tyrosine',
  CYSTEINE = 'Cysteine',
  TRYPTOPHAN = 'Tryptophan',
  STOP = 'STOP'
}

export const aminoMap: {[key: string]: AminoAcids} = {
  'AUG': AminoAcids.METHIONINE,
  'UUU': AminoAcids.PHENYLALANINE,
  'UUC': AminoAcids.PHENYLALANINE,
  'UUA': AminoAcids.LEUCINE,
  'UUG': AminoAcids.LEUCINE,
  'UCU': AminoAcids.SERINE,
  'UCC': AminoAcids.SERINE,
  'UCA': AminoAcids.SERINE,
  'UCG': AminoAcids.SERINE,
  'UAU': AminoAcids.TYROSINE,
  'UAC': AminoAcids.TYROSINE,
  'UGU': AminoAcids.CYSTEINE,
  'UGC': AminoAcids.CYSTEINE,
  'UGG': AminoAcids.TRYPTOPHAN,
  'UAA': AminoAcids.STOP,
  'UAG': AminoAcids.STOP,
  'UGA': AminoAcids.STOP
};

export function translate(rna: string): string[] {
  const splittedRna = rna.match(/.{3}/g) || [];
  const aminoArray: string[] = [];

  for (const codone of splittedRna) {
    const amino = aminoMap[codone];
    if (amino === AminoAcids.STOP) {
      break;
    }
    aminoArray.push(amino);
  }

  return aminoArray;
}
