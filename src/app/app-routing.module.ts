import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterClassesComponent } from './character-classes/character-classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpellsComponent } from './spells/spells.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'characterClasses', component: CharacterClassesComponent },
  { path: 'spells', component: SpellsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
