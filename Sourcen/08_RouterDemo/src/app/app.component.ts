import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Status: {{ loginService.loggedIn ? 'eingeloggt' : 'ausgeloggt' }}</p>

    <ul>
      <li><a routerLink="view1">Ansicht 1</a></li>
      <li><a [routerLink]="[ 'view2', 123 ]">Ansicht 2</a></li>
      <li><a routerLink="view3">Ansicht 3</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(public loginService: LoginService) {}
}
