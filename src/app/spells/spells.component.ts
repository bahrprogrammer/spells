import { Component, OnInit } from '@angular/core';
import { SpellsService } from './spells.service';
import { ISpell } from '../models/ISpells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  selectedSpell: ISpell;
  spells: ISpell[];

  constructor(private spellService: SpellsService) { }

  ngOnInit(): void {
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells().subscribe({
      next: (data) => (this.spells = data)
    });
  }

  select(spell: ISpell): void {
    this.selectedSpell = spell;
  }
}
