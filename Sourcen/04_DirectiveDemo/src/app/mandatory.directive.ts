import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMandatory]'
})
export class MandatoryDirective {
  @Input('appMandatory') minLength = 5;

  // eq. property binding
  @HostBinding('style.backgroundColor') inputBackground: string;

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.value.trim().length >= this.minLength) {
      this.inputBackground = null;
    }
    else {
      this.inputBackground = 'red';
    }
  }
}
