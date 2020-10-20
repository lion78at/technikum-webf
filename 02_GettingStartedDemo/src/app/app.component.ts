import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>BMI-Calculator</h1>

    <p>
      <label>Größe:
        <input [(ngModel)]="height" type="number" (input)="resetBMI()">
      </label> cm
    </p>

    <p>
      <label>Gewicht:
        <input [(ngModel)]="weight" type="number" (input)="resetBMI()">
      </label> kg
    </p>

    <p>
      <button (click)="calculateBMI()">BMI berechnen</button>
    </p>

    <div *ngIf="bmi">
      <h2>Dein BMI: {{ bmi | number:'.2-2' }}</h2>
      <img [src]="animal">
    </div>
  `,
  styles: [`
    h1 {
      color: red;
    }

    img {
      height: 200px;
      width: auto;
    }
  `]
})
export class AppComponent {
  height = 175;
  weight = 75;
  bmi: number;
  animal: string;

  calculateBMI(): void {
    console.log(`height=${this.height}, weight=${this.weight}`);

    this.bmi = this.weight / (this.height / 100) ** 2;

    if (this.bmi < 20) {
      this.animal = 'assets/giraffe.jpg';
    }
    else if (this.bmi < 25) {
      this.animal = 'assets/horse.jpg';
    }
    else {
      this.animal = 'assets/elephant.jpg';
    }
  }

  resetBMI(): void {
    this.bmi = null;
  }
}
