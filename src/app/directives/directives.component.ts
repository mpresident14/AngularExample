import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  flag : boolean = true;
  colors : string[] = ["red", "blue", "green", "violet"];
  colorIndex = 0;
  groceryList : string[] = [];
  currentGrocery : string = "";

  toggleFlag() : void {
    this.flag = !this.flag;
  }

  changeColor() : void {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
  }

  addGroceryItem() : void {
    if (this.currentGrocery === "") {
      return;
    }
    
    this.groceryList.push(this.currentGrocery);
    this.currentGrocery = "";
  }

}
