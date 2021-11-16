import { Component } from '@angular/core';
import { LoveCalculatorService } from './love-calculator.service';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="calculateLove()" #form="ngForm">
      <p>
        <input name="name1" [(ngModel)]="name1" placeholder="1. Name" required minlength="2" #inputName1="ngModel" (input)="resetResult()">
        <span *ngIf="inputName1.touched && inputName1.invalid" class="error">Name fehlt!</span>
      </p>

      <p>
        <input name="name2" [(ngModel)]="name2" placeholder="2. Name" required minlength="2" #inputName2="ngModel" (input)="resetResult()">
        <span *ngIf="inputName2.touched && inputName2.invalid" class="error">Name fehlt!</span>
      </p>

      <button *ngIf="form.valid">Liebe berechnen</button>

      <p *ngIf="result">{{ result }}</p>
    </form>

    <pre>{{ form.value | json }}</pre>
  `,
  styles: [`
    input.ng-touched.ng-invalid {
      border: 2px solid red;
    }

    input.ng-touched.ng-valid {
      border: 2px solid green;
    }

    .error {
      color: red;
      padding-left: 10px;
    }

  `]
})
export class AppComponent {
  name1 = '';
  name2 = '';
  result?: string;

  constructor(private loveCalculatorService: LoveCalculatorService) {}

  resetResult(): void {
    this.result = undefined;
  }

  calculateLove(): void {
    this.result = 'Berechne Liebe ...';

    this.loveCalculatorService.calculateLove(this.name1, this.name2)
      .then(loveCalculatorResult => this.result = `${loveCalculatorResult.percentage} % - ${loveCalculatorResult.result}`)
      .catch(error => this.result = `Es ist ein Fehler aufgetreten: ${error.message}`);
  }
}
