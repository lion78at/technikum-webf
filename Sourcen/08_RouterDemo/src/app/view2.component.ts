import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view2',
  template: `
    <h1>Ich bin die zweite Ansicht und wurde mit ID {{ id }} aufgerufen!</h1>
  `,
  styles: [
  ]
})
export class View2Component {
  id?: number;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }
}
