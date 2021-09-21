import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>BMI-Calculator</h1>

    <p>
      <label>Größe:
        <input> cm
      </label>
    </p>

    <p>
      <label>Gewicht:
        <input> kg
      </label>
    </p>

    <button>BMI berechnen</button>

    <h2>Dein BMI: 20.95</h2>
    <img src="">
  `,
  styles: []
})
export class AppComponent {

}
