import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FirstParagraphTruncatedPipe } from './pipes/first-paragraph-truncated.pipe';


@NgModule({
  declarations: [FirstParagraphTruncatedPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EditorModule,
    FirstParagraphTruncatedPipe,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SharedModule { }
