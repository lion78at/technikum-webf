import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Countdown</h1>

    <app-countdown></app-countdown>

    <app-countdown
      [time]="3"
      buttonLabel="Countdown starten"
      (timeChange)="countdownTimeChanged($event)"
      (finish)="countdownFinished()"
    ></app-countdown>
  `,
  styles: []
})
export class AppComponent {
  countdownTimeChanged(time: number) {
    console.log('countdownTimeChanged() >> time=' + time);
  }

  countdownFinished() {
    alert('Fertig!');
  }
}
