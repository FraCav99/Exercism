export class DnDCharacter {

  constructor(
    public strength: number = DnDCharacter.generateAbilityScore(),
    public dexterity: number = DnDCharacter.generateAbilityScore(),
    public constitution: number = DnDCharacter.generateAbilityScore(),
    public intelligence: number = DnDCharacter.generateAbilityScore(),
    public wisdom: number = DnDCharacter.generateAbilityScore(),
    public charisma: number = DnDCharacter.generateAbilityScore(),
    public hitpoints: number = 10 + DnDCharacter.getModifierFor(constitution)
  ) {}
  
  public static generateAbilityScore(): number {
    const ROLLING_DICE_TIMES: number = 4;
    const rolls: number[] = [...Array(ROLLING_DICE_TIMES)]
      .map(() => this.generateRandomDiceValue())
      .sort((a, b) => b - a);
    
    // Sorted in descending order
    // so last element can be removed
    rolls.pop();

    return rolls.reduce((prev, next) => prev + next, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  private static generateRandomDiceValue(): number {
    const DICE_SIDES: number = 6;
    return Math.floor(Math.random() * DICE_SIDES) + 1;
  }
}
