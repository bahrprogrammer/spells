import { Component, OnInit } from '@angular/core';
import { SpellsService } from './spells.service';
import { ISpell } from '../models/ISpells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  storage = window.localStorage;
  storageKey = 'spell-filter';
  
  spells: ISpell[];
  displayedSpells: ISpell[];

  showOnlyConcentration = false;
  showOnlyRitual = false;

  constructor(private spellService: SpellsService) { }

  ngOnInit(): void {
    this.getLocalStorage();
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells().subscribe({
      next: (data) => {
        (this.spells = data);
        this.filterChange();
      }
    });
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

  filterChange(): void {
    this.displayedSpells = [];

    if (this.showOnlyConcentration && this.showOnlyRitual) {
      this.spells.forEach(s => {
        if (s.concentration && s.ritual) {
          this.displayedSpells.push(s);
        }
      });
    } else if (this.showOnlyConcentration) {
      this.spells.forEach(s => {
        if (s.concentration) {
          this.displayedSpells.push(s);
        }
      });
    } else if (this.showOnlyRitual) {
      this.spells.forEach(s => {
        if (s.ritual) {
          this.displayedSpells.push(s);
        }
      });
    } else {
      this.displayedSpells = [ ...this.spells ];
    }

    this.addToLocalStorage();
  }



}
