import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NoteComponent } from './note/note.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { ExampleDirective } from './directives/example.directive';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';
import { AppRoutingModule } from './app-routing.module';
import { RoutingComponent } from './routing/routing.component';
import { HelloComponent } from './routing/hello/hello.component';
import { GoodbyeComponent } from './routing/goodbye/goodbye.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { HelloNameComponent } from './routing/hello-name/hello-name.component';
import { ChildRoutingComponent } from './routing/child-routing/child-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    NoteComponent,
    NoteInputComponent,
    ExampleDirective,
    HttpComponent,
    RoutingComponent,
    HelloComponent,
    GoodbyeComponent,
    PageNotFoundComponent,
    HelloNameComponent,
    ChildRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent] // Start with AppComponent
})
export class AppModule { }
