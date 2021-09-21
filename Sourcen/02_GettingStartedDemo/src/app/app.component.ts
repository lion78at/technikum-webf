import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>BMI-Calculator</h1>

    <p>
      <label>Größe:
        <input [(ngModel)]="height" (input)="resetBMI()"> cm
      </label>
    </p>

    <p>
      <label>Gewicht:
        <input [(ngModel)]="weight" (input)="resetBMI()"> kg
      </label>
    </p>

    <button (click)="calculateBMI()">BMI berechnen</button>

    <div *ngIf="bmi">
      <h2>Dein BMI: {{ bmi | number:'.2-2' }}</h2>
      <img [src]="animal">
    </div>
  `,
  styles: []
})
export class AppComponent {
  height = 175;
  weight = 75;
  bmi: number;
  animal: string;

  calculateBMI(): void {
    // alert(this.height + " " + this.weight);

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
