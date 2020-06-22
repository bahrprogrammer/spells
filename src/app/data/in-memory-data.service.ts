import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as spellData from './spells.json';
import * as characterClassesData from './characterClasses.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characterClasses = (characterClassesData as any).default;

    const spells = (spellData as any).default;

    const schools: string[] = [
      'Abjuration',
      'Conjuration',
      'Divination',
      'Enchantment',
      'Evocation',
      'Illusion',
      'Necromancy',
      'Transmutation'
    ];

    return {characterClasses, spells, schools};
  }

  genId(array: any[]): number {
    return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 11;
  }
}
