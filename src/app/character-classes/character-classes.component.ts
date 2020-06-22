import { Component, OnInit } from '@angular/core';

import { CharacterClass } from '../models/CharacterClass';
import { CharacterClassesService } from './character-classes.service';

@Component({
  selector: 'app-character-classes',
  templateUrl: './character-classes.component.html',
  styleUrls: ['./character-classes.component.scss']
})
export class CharacterClassesComponent implements OnInit {
  characterClasses: CharacterClass[] = [];

  constructor(private service: CharacterClassesService) { }

  ngOnInit(): void {
    this.getCharacterClasses();
  }

  getCharacterClasses(): void {
    this.service.getCharacterClasses().subscribe({
      next: (data) => (this.characterClasses = data)
    });
  }
}
