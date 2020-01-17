import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  // @Input allows us to receive data into "noteText" from a parent component (AppComponent)
  @Input() name : string;
  @Input() text : string;
}
