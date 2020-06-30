import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CharacterClass } from '../../models/CharacterClass';
import { CharacterClassesService } from '../character-classes.service';

@Component({
  selector: 'app-character-class-edit',
  templateUrl: './character-class-edit.component.html',
  styleUrls: ['./character-class-edit.component.scss']
})
export class CharacterClassEditComponent implements OnInit {
  characterClass: CharacterClass;

  constructor(private route: ActivatedRoute, private service: CharacterClassesService) { }

  ngOnInit(): void {
    console.log('before' + this.route.snapshot.paramMap.get('id'));
    this.getCharacterClass();
    console.log(this.characterClass);
  }

  getCharacterClass(): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log('after ' + id);
    this.service.getCharacterClassById(id).subscribe({
      next: (data) => (this.characterClass = data)
    });
  }
}
