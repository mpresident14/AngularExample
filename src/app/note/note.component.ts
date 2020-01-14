import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // @Input allows us to receive data into "noteText" from a parent component (AppComponent)
  @Input() noteText : string;

  constructor() { }

  ngOnInit() {
  }

}
