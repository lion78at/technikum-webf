import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './types';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {
  transform(person: Person, showFirstName = true, showLastName = true): string {
    if (showFirstName === showLastName) {
      return `${person.firstName} ${person.lastName}`;
    }
    else if (showFirstName) {
      return person.firstName;
    }
    else if (showLastName) {
      return person.lastName;
    }
  }
}
