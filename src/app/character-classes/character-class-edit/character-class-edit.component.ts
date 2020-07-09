import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterClass } from '../../models/CharacterClass';
import { CharacterClassesService } from '../character-classes.service';
import { ISpell } from 'src/app/models/ISpells';

@Component({
  selector: 'app-character-class-edit',
  templateUrl: './character-class-edit.component.html',
  styleUrls: ['./character-class-edit.component.scss']
})
export class CharacterClassEditComponent implements OnInit {
  characterClass: CharacterClass;
  allspells: ISpell[] = [];
  cantrips: ISpell[] = [];
  firstLevelSpells: ISpell[] = [];
  secondLevelSpells: ISpell[] = [];
  thirdLevelSpells: ISpell[] = [];
  fourthLevelSpells: ISpell[] = [];
  fifthLevelSpells: ISpell[] = [];
  sixthLevelSpells: ISpell[] = [];
  seventhLevelSpells: ISpell[] = [];
  eighthLevelSpells: ISpell[] = [];
  ninthLevelSpells: ISpell[] = [];

  jsonClass: boolean;

  constructor(private route: ActivatedRoute, private service: CharacterClassesService) { }

  ngOnInit(): void {
    this.getCharacterClass();
    this.getAllSpells();
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
        this.allspells = data;
        this.getClassSpells();
        this.cantrips = this.allspells.filter((s) => s.level === 0);
        this.firstLevelSpells = this.allspells.filter((s) => s.level === 1);
        this.secondLevelSpells = this.allspells.filter((s) => s.level === 2);
        this.thirdLevelSpells = this.allspells.filter((s) => s.level === 3);
        this.fourthLevelSpells = this.allspells.filter((s) => s.level === 4);
        this.fifthLevelSpells = this.allspells.filter((s) => s.level === 5);
        this.sixthLevelSpells = this.allspells.filter((s) => s.level === 6);
        this.seventhLevelSpells = this.allspells.filter((s) => s.level === 7);
        this.eighthLevelSpells = this.allspells.filter((s) => s.level === 8);
        this.ninthLevelSpells = this.allspells.filter((s) => s.level === 9);
      }
    });
  }

  getClassSpells(): void {
    this.allspells.forEach(s => {
      if (this.characterClass.spells.find(x => x === s.id)){
        s.selected = true;
      } else {
        s.selected = false;
      }
    });
  }

  updateCharacterClass(): void {
    this.characterClass.spells = this.getSelectedSpells();
    this.jsonClass = true;// JSON.stringify(this.characterClass);
  }

  getSelectedSpells(): number[] {
    const selected: number[] = [];
    this.cantrips.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.firstLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.secondLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.thirdLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.fourthLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.fifthLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.sixthLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.seventhLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.eighthLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    this.ninthLevelSpells.forEach(s => {
      if (s.selected) {
        selected.push(s.id);
      }
    });
    return selected;
  }
}
