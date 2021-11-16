import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view1',
  template: `
    <h1>Ich bin die erste Ansicht!</h1>

    <button (click)="changeView()">zur Ansicht 2</button>
  `,
  styles: [
  ]
})
export class View1Component {
  constructor(private router: Router) {}

  changeView(): void {
    this.router.navigate([ 'view2', 123 ]);
  }
}
