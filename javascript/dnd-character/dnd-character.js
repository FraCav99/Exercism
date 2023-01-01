export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

export class Character {

  static BASE_HP = 10;
  static DICE_SIDES = 6;

  strength = Character.rollAbility();
  dexterity = Character.rollAbility();
  constitution = Character.rollAbility();
  intelligence = Character.rollAbility();
  wisdom = Character.rollAbility();
  charisma = Character.rollAbility();
  hitpoints = Character.BASE_HP + abilityModifier(this.constitution);

  static rollAbility() {
    const ROLLING_DICE_TIMES = 4;
    const rolls = [...Array(ROLLING_DICE_TIMES)].map(Character.#throwDice).sort((a, b) => b - a);

    // Sorted in descending order
    // so last element can be removed
    rolls.pop();

    return rolls.reduce((prev, next) => prev + next, 0);
  }

  static #throwDice() {
    return Math.floor(Math.random() * Character.DICE_SIDES) + 1;
  }

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return this.hitpoints;
  }
}
