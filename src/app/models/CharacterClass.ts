import { ISpell } from './ISpells';

export class CharacterClass {
  id: number;
  name: string;
  fullSpellCaster: boolean;
  spells: ISpell[];

  constructor() {}
}
