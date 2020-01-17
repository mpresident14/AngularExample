import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NoteComponent } from './note/note.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { ExampleDirective } from './directives/example.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    NoteComponent,
    NoteInputComponent,
    ExampleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Start with AppComponent
})
export class AppModule { }
