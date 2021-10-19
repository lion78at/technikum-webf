import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './types';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {
  transform(person: Person, showFirstName = true, showLastName = true): string {
    if (showFirstName && !showLastName) {
      return person.firstName;
    }
    else if (!showFirstName && showLastName) {
      return person.lastName;
    }
    else {
      return person.firstName + ' ' + person.lastName;
    }
  }
}
