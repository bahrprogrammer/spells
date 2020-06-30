import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(private route: ActivatedRoute, private service: CharacterClassesService) { }

  ngOnInit(): void {
    console.log('before' + this.route.snapshot.paramMap.get('id'));
    this.getCharacterClass();
    this.getAllSpells();
    console.log('test');
  }

  getCharacterClass(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCharacterClassById(id).subscribe({
      next: (data) => (this.characterClass = data)
    });
  }

  getAllSpells(): void{
    this.service.getAllSpells().subscribe({
      next: (data) => {
        (this.allspells = data);
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
}
