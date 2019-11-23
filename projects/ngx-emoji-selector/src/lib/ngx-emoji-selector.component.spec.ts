import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmojiSelectorComponent } from './ngx-emoji-selector.component';

describe('NgxEmojiSelectorComponent', () => {
  let component: NgxEmojiSelectorComponent;
  let fixture: ComponentFixture<NgxEmojiSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEmojiSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEmojiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
