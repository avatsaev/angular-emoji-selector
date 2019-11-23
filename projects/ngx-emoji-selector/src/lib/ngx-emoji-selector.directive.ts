import {Directive, ElementRef, HostListener} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NgxEmojiSelectorComponent} from './ngx-emoji-selector.component';

@Directive({
  selector: '[ngxEmojiSelector]'
})
export class NgxEmojiSelectorDirective {


  @HostListener('click', ['$event'])
  async onClick(e) {
    const dialogRef = this.dialog.open(NgxEmojiSelectorComponent, {
      width: '450px',
      hasBackdrop: true,
      closeOnNavigation: true,
      backdropClass: 'custom-backdrop',
      position: {
        top: e.pageY + 'px',
        left: e.pageY + 'px'
      }
    });
    const emoji = await dialogRef.afterClosed().toPromise();

    if (emoji) {
      this.elementRef.nativeElement.innerHTML = emoji;
    }

  }

  constructor(private dialog: MatDialog, private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.cursor = 'pointer';
  }
}
