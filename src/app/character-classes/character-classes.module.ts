import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CharacterClassesComponent } from './character-classes.component';
import { CharacterClassEditComponent } from './character-class-edit/character-class-edit.component';


@NgModule({
  declarations: [
    CharacterClassesComponent,
    CharacterClassEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'characterClasses/:id', component: CharacterClassEditComponent },
      { path: 'characterClasses/:id/edit', component: CharacterClassEditComponent }
    ])
  ]
})
export class CharacterClassesModule { }
