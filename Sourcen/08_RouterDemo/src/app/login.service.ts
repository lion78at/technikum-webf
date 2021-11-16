import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';

const PASSWORD = 'topsecret';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate, CanDeactivate<Component> {
  loggedIn = false;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loggedIn) {
      const password = prompt('Bitte gib das Passwort ein, um dich anzumelden!');
      if (password === PASSWORD) {
        this.loggedIn = true;
      }
      else {
        this.router.navigate(['access-denied']);
      }
    }

    return this.loggedIn;
  }

  canDeactivate(component: Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    if (this.loggedIn && confirm('Willst du dich abmelden?')) {
      this.loggedIn = false;
    }

    return true;
  }
}
