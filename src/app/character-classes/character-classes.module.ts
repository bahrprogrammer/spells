import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CharacterClassesComponent } from './character-classes.component';
import { CharacterClassEditComponent } from './character-class-edit/character-class-edit.component';
import { CharacterClassDetailComponent } from './character-class-detail/character-class-detail.component';


@NgModule({
  declarations: [
    CharacterClassesComponent,
    CharacterClassEditComponent,
    CharacterClassDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'characterClasses/:id', component: CharacterClassDetailComponent },
      { path: 'characterClasses/:id/edit', component: CharacterClassEditComponent }
    ])
  ]
})
export class CharacterClassesModule { }
