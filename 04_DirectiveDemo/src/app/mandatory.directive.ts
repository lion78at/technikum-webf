import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMandatory]'
})
export class MandatoryDirective {
  @Input('appMandatory') minLength = 5;

  @HostBinding('style.backgroundColor') inputBackground: string;

  @HostListener('blur', ['$event'])
  onBlur(event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.trim().length >= this.minLength) {
      // ok
      // inputElement.style.backgroundColor = null;
      this.inputBackground = null;
    }
    else {
      // not ok
      // inputElement.style.backgroundColor = 'red';
      this.inputBackground = 'red';
    }
  }
}
