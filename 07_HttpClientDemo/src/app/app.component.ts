import { Component } from '@angular/core';
import { LoveCalculatorService } from './love-calculator.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input [(ngModel)]="name1" placeholder="1. Name">
      <input [(ngModel)]="name2" placeholder="2. Name">
      <button (click)="calculateLove()">Liebe berechnen</button>
    </div>

    <p *ngIf="result">
      {{ result }}
    </p>
  `,
  styles: []
})
export class AppComponent {
  name1: string;
  name2: string;
  result: string;

  constructor(private loveCalculatorService: LoveCalculatorService) {}

  calculateLove(): void {
    this.loveCalculatorService.calculateLove(this.name1, this.name2)
      .then(
        loveCalculatorResult => this.result = `${loveCalculatorResult.percentage} % - ${loveCalculatorResult.result}`
      );
  }
}
