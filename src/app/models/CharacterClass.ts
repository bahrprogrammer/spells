import { ISpell } from './ISpells';

export class CharacterClass {
  id: number;
  name: string;
  description: string;
  fullSpellCaster: boolean;
  spells: number[];

  constructor() {}
}
