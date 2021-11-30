import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <h1>Newsverwaltung</h1>

    <app-news-list></app-news-list>

    <app-news-input></app-news-input>
  `,
  styles: [
  ]
})
export class NewsComponent  {

  constructor() { }

}
