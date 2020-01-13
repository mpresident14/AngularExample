import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBinding } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBinding
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Start with AppComponent
})
export class AppModule { }
