import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view3',
  template: `
    <h1>Ich bin die dritte Ansicht und streng geheim!</h1>
  `,
  styles: [
  ]
})
export class View3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
