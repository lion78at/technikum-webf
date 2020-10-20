import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Ich bin die Hauptkomponente.</h1>

    <app-countdown text="Hallo, ich bin die Nebenkomponente!"
      (pressed)="showMessage($event)"></app-countdown>
  `,
  styles: []
})
export class AppComponent {
  showMessage(nr: number): void {
    alert('Du hast mich gedrückt! ' + nr);
  }
}
