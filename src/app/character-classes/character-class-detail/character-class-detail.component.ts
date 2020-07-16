import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterClass } from '../../models/CharacterClass';
import { CharacterClassesService } from '../character-classes.service';
import { ISpell } from 'src/app/models/ISpells';

@Component({
  selector: 'app-character-class-detail',
  templateUrl: './character-class-detail.component.html',
  styleUrls: ['./character-class-detail.component.scss']
})
export class CharacterClassDetailComponent implements OnInit {
  storage = window.localStorage;
  storageKey = 'spell-filter';

  characterClass: CharacterClass;
  allClassSpells: ISpell[] = [];
  displayedClassSpells: ISpell[] = [];

  cantrips: ISpell[] = [];
  first: ISpell[] = [];
  second: ISpell[] = [];
  third: ISpell[] = [];
  fourth: ISpell[] = [];
  fifth: ISpell[] = [];
  sixth: ISpell[] = [];
  seventh: ISpell[] = [];
  eighth: ISpell[] = [];
  ninth: ISpell[] = [];

  showOnlyConcentration = false;
  showOnlyRitual = false;

  constructor(private route: ActivatedRoute, private service: CharacterClassesService) { }

  ngOnInit(): void {
    this.getLocalStorage();
    this.getCharacterClass();
    this.getAllSpells();
  }

  addToLocalStorage() {
    const localStorageAvailable = this.storageAvailable('localStorage');

    if (localStorageAvailable) {
      const filters: any = {
        showOnlyConcentration: this.showOnlyConcentration,
        showOnlyRitual: this.showOnlyRitual
      };

      this.storage.spellFilters = JSON.stringify(filters);
    }
  }

  getLocalStorage() {
    const localStorageAvailable = this.storageAvailable('localStorage');

    if (localStorageAvailable) {
      const cache = this.storage.spellFilters;

      if (cache) {
        const filters: any = JSON.parse(cache);
        this.showOnlyConcentration = filters.showOnlyConcentration;
        this.showOnlyRitual = filters.showOnlyRitual;
      }
    }
  }

  getCharacterClass(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCharacterClassById(id).subscribe({
      next: (data) => (this.characterClass = data)
    });
  }

  getAllSpells(): void {
    this.service.getAllSpells().subscribe({
      next: (data) => {
        this.allClassSpells = this.getClassSpells(data);
        this.filterChange();
      }
    });
  }

  getClassSpells(spells: ISpell[]): ISpell[] {
    const classSpells: ISpell[] = [];

    spells.forEach(s => {
      if (this.characterClass.spells.find(x => x === s.id)){
        classSpells.push(s);
      }
    });

    return classSpells;
  }

  filterChange(): void {
    this.displayedClassSpells = [];

    if (this.showOnlyConcentration && this.showOnlyRitual) {
      this.allClassSpells.forEach(s => {
        if (s.concentration && s.ritual) {
          this.displayedClassSpells.push(s);
        }
      });
    } else if (this.showOnlyConcentration) {
      this.allClassSpells.forEach(s => {
        if (s.concentration) {
          this.displayedClassSpells.push(s);
        }
      });
    } else if (this.showOnlyRitual) {
      this.allClassSpells.forEach(s => {
        if (s.ritual) {
          this.displayedClassSpells.push(s);
        }
      });
    } else {
      this.displayedClassSpells = [ ...this.allClassSpells ];
    }

    this.addToLocalStorage();
  }

  showCantrips(): boolean {
    const value = this.displayedClassSpells.filter(s => s.level === 0).length > 0;
    return value;
  }

  showFirst(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 1).length > 0;
  }

  showSecond(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 2).length > 0;
  }

  showThird(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 3).length > 0;
  }

  showFourth(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 4).length > 0;
  }

  showFifth(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 5).length > 0;
  }

  showSixth(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 6).length > 0;
  }

  showSeventh(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 7).length > 0;
  }

  showEighth(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 8).length > 0;
  }

  showNinth(): boolean {
    return this.displayedClassSpells.filter(s => s.level === 9).length > 0;
  }

  storageAvailable(type: any): any {
    let storage;

    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        (storage && storage.length !== 0);
    }

    return true;
  }
}
