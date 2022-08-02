import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { HijoDosComponent } from './hijo-dos/hijo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    HijoDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
