import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-countdown></app-countdown>

    <app-countdown
      time="3"
      buttonLabel="Countdown starten"
      (timeChange)="countdownTimeChanged($event)"
      (finish)="countdownFinished()"
    ></app-countdown>
  `,
  styles: []
})
export class AppComponent {
  countdownTimeChanged(time: number): void {
    console.log(`Die Zeit hat sich geändert: ${time}`);
  }

  countdownFinished(): void {
    alert('Fertig!');
  }
}
