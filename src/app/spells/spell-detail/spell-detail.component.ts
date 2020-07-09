import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpellsService } from '../spells.service';
import { ISpell } from 'src/app/models/ISpells';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {
  spell: ISpell;

  get components(): string {
    let value = '';

    if (this.spell.verbal) {
      value = 'V';
    }

    if (this.spell.somantic) {
      if (this.spell.verbal) {
        value += ', ';
      }
      value += 'S';
    }

    if (this.spell.material) {
      if (this.spell.verbal || this.spell.somantic) {
        value += ', ';
      }

      value += `M ${this.spell.components}`;
    }

    return value;
  }

  get duration(): string {
    let value = '';

    if (this.spell.concentration) {
      value += 'Concentration, ';
    }

    value += this.spell.duration;

    return value;
  }

  get display(): string {
    if (this.spell.level === 0) {
      return `${this.spell.school} Cantrip`;
    }
    let value = '';

    switch (this.spell.level) {
      case 0: {
        value = `${this.spell.school} Cantrip`;
        break;
      }
      case 1: {
        value = `1st-level ${this.spell.school}`;
        break;
      }
      case 2: {
        value = `2nd-level ${this.spell.school}`;
        break;
      }
      case 3: {
        value = `3rd-level ${this.spell.school}`;
        break;
      }
      case 4: {
        value = `4th-level ${this.spell.school}`;
        break;
      }
      case 5: {
        value = `5th-level ${this.spell.school}`;
        break;
      }
      case 6: {
        value = `6th-level ${this.spell.school}`;
        break;
      }
      case 7: {
        value = `7th-level ${this.spell.school}`;
        break;
      }
      case 8: {
        value = `8th-level ${this.spell.school}`;
        break;
      }
      case 9: {
        value = `9th-level ${this.spell.school}`;
        break;
      }
      default: {
        value = 'This spell does not have a level assigned.';
      }
    }

    if (this.spell.ritual) {
      value += '(ritual)';
    }

    return value;
  }

  constructor(private route: ActivatedRoute, private service: SpellsService) { }

  ngOnInit(): void {
    this.getSpell();
  }

  getSpell(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getSpellById(id).subscribe({
      next: (data) => (this.spell = data)
    });
  }

}
