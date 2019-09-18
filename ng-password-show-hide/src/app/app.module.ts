import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordShowDirective } from './password-show.directive';
import { AppPasswordDirective } from './app-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordShowDirective,
    AppPasswordDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
