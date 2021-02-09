import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgForExampleComponent } from './app.component';

@NgModule({
  declarations: [NgForExampleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NgForExampleComponent],
})
export class AppModule {} 
