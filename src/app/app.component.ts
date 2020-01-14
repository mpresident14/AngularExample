import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'first-project';
  notes : string[] = [];

  onNoteAdded(note : string) {
    this.notes.push(note);
  }
}
