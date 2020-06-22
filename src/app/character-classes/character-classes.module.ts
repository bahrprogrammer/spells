import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterClassesComponent } from './character-classes.component';


@NgModule({
  declarations: [CharacterClassesComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CharacterClassesModule { }
