import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TruncateDescriptionPipe } from './pipes/truncate-description.pipe';


@NgModule({
  declarations: [
    TruncateDescriptionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EditorModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SharedModule { }
