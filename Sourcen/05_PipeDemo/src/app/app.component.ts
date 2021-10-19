import { Component } from '@angular/core';
import { Person } from './types';

const PERSONS: Person[] = [
  new Person('Markus', 'Mustermann'),   // variant 1: constructor
  { firstName: 'Martina', lastName: 'Musterfrau' }   // variant 2: duck typing
];

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let person of persons">
        {{ person | person }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  persons = PERSONS;
}
