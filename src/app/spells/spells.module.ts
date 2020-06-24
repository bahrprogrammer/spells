import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './spells.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [SpellsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SpellsModule { }
