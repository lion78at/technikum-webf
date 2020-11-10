import { Component } from '@angular/core';
import { Person } from './types';

const PERSONS: Person[] = [
  { firstName: 'Markus', lastName: 'Mustermann' },
  { firstName: 'Martina', lastName: 'Musterfrau' }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>Personen</h1>
    <ul>
      <li *ngFor="let person of persons">
        {{ person | person:false:true }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  persons = PERSONS;
}
