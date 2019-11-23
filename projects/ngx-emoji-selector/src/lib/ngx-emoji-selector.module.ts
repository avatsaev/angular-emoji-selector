import { NgModule } from '@angular/core';
import { NgxEmojiSelectorComponent } from './ngx-emoji-selector.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxEmojiSelectorDirective} from './ngx-emoji-selector.directive';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgxEmojiSelectorComponent, NgxEmojiSelectorDirective],
  imports: [
      CommonModule,
      MatDialogModule
  ],
  exports: [NgxEmojiSelectorComponent, NgxEmojiSelectorDirective],
  entryComponents: [NgxEmojiSelectorComponent]
})
export class NgxEmojiSelectorModule { }
