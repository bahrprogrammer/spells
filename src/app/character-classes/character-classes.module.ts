import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { CharacterClassesComponent } from './character-classes.component';


@NgModule({
  declarations: [
    CharacterClassesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CharacterClassesModule { }
