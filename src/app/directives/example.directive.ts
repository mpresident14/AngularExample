import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.color = "green";
    elementRef.nativeElement.style.marginTop = "10px";
  }

}
