# NGX Emoji Selector

Emoji popup selector

## How to use

Install dependencies: 

`npm i @angular/material @angular/cdk emojis-list hammerjs`

Import in main module:




``` typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxEmojiSelectorModule} from 'ngx-emoji-selector';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxEmojiSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```


3. Use the ngxEmojiSelector on an element containing an emoji:

```html
<p style="margin-top: 30px; margin-left: 30px">
  <span ngxEmojiSelector>👋</span> SOME TEXT
</p>

```
