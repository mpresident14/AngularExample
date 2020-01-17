import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DirectivesComponent } from './directives/directives.component';

export type Note = {name: string, text: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title: string = 'first-project';
  notes: Note[] = [];

  @ViewChild("firstItem", {static: false})
  firstItem: ElementRef;
  activeListItem: HTMLLIElement;

  // @ViewChild Allows us to access a child component.
  @ViewChild(DirectivesComponent, {static: false}) 
  directivesComp: DirectivesComponent;

  // Angular will fill in inject @ViewChild members automatically, but only later in the component
  // lifecycle, after the view initialization is completed.
  ngAfterViewInit() {
    console.log("DirectivesComponent colors via @ViewChild: " + this.directivesComp.colors);
    this.activeListItem = this.firstItem.nativeElement;
  }

  onNoteAdded(note: Note) {
    this.notes.push(note);
  }

  // Change active list item on click
  onItemClicked(e: MouseEvent) {
    this.activeListItem.classList.remove("active");
    this.activeListItem = <HTMLLIElement> e.target;
    this.activeListItem.classList.add("active");
  }
}
