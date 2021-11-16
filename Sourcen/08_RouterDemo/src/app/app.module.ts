import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { View1Component } from './view1.component';
import { View2Component } from './view2.component';
import { View3Component } from './view3.component';
import { AccessDeniedComponent } from './access-denied.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'view1', component: View1Component },
      { path: 'view2/:id', component: View2Component },
      { path: 'view3', component: View3Component, canActivate: [LoginService], canDeactivate: [LoginService] },
      { path: 'access-denied', component: AccessDeniedComponent },
      { path: '**', redirectTo: 'view1' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
