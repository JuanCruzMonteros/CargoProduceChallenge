import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { target: { value: string; }; }) {
    this.el.nativeElement.value = event.target.value.toUpperCase();
  }

}
