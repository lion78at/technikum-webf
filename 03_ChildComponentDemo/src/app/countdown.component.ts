import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `
    <h2>{{ text }}</h2>
    <button (click)="buttonPressed()">Drück mich!</button>
  `,
  styles: [
  ]
})
export class CountdownComponent {
  @Input() text: string;
  @Output() pressed = new EventEmitter<number>();

  buttonPressed(): void {
    this.pressed.emit(42);   // feuert Event
  }
}
