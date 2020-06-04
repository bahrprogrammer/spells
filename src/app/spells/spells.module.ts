import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { SpellsComponent } from './spells.component';



@NgModule({
  declarations: [SpellsComponent],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule
  ]
})
export class SpellsModule { }
