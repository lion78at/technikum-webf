import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <label>Name:
        <input appMandatory="2">
      </label>
    </p>
  `,
  styles: []
})
export class AppComponent {}
