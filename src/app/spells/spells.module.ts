import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpellsComponent } from './spells.component';
import { SharedModule } from '../shared/shared.module';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';



@NgModule({
  declarations: [SpellsComponent, SpellDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'spell/:id', component: SpellDetailComponent }
    ]),
    SharedModule
  ]
})
export class SpellsModule { }
