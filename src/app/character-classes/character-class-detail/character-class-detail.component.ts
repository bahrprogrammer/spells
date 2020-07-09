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
  characterClass: CharacterClass;
  allClassSpells: ISpell[] = [];

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
        this.allClassSpells = this.getClassSpells(data);
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

}
