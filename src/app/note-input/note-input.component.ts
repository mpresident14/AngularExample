import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Note } from '../app.component';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})
export class NoteInputComponent {

  // @Output allows us "noteAdded" to send data to a parent component (AppComponent)
  @Output() noteAdded = new EventEmitter<Note>();
  // @ViewChild gets a local reference in TypeScript
  @ViewChild("nameElement", {static : false}) noteNameElement : ElementRef;

  onNoteAdded(noteElement: HTMLInputElement) : void {
    this.noteAdded.emit({
      name: this.noteNameElement.nativeElement.value, 
      text: noteElement.value
    });
    
    this.noteNameElement.nativeElement.value = "";
    noteElement.value = "";
  }

}
