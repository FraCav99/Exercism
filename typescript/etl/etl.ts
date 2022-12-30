export interface LegacyScoreSystem {
  [key: string]: string[];
}

export interface NewScoreSystem {
  [key: string]: number
}

export function transform(old: LegacyScoreSystem): NewScoreSystem {
  const newScores: NewScoreSystem = {};

  for (const [key, values] of Object.entries(old)) {
    for (const value of values) {
      newScores[value.toLowerCase()] = +key;
    }
  }

  return newScores;
}
