import { Component, OnInit } from '@angular/core';
import * as emojis from 'emojis-list';

@Component({
  selector: 'lib-ngx-emoji-selector',
  templateUrl: './ngx-emoji-selector.component.html',
  styles: [`
    .main-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      max-height: 300px;
      overflow-y: scroll;
    }
      
    .emoji {
      cursor: pointer;
      padding: 3px;
      text-align: center;
    }
      
    .emoji:hover {
      background: rgba(0,0,0, 0.1);
      
    }
      
  `]
})
export class NgxEmojiSelectorComponent implements OnInit {

  allEmojis = emojis;

  constructor() { }

  ngOnInit() {
  }


}
