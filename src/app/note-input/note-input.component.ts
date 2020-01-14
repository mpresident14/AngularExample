import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})
export class NoteInputComponent implements OnInit {

  currentNote : string = "";
  // @Output allows us "noteAdded" to send data to a parent component (AppComponent)
  @Output() noteAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNoteAdded() : void {
    this.noteAdded.emit(this.currentNote);
    this.currentNote = "";
  }

}
