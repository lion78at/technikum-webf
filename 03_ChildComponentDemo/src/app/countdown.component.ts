import { Component, EventEmitter, Input, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  template: `
    <div *ngIf="!running">
      <input [(ngModel)]="time" type="number" min="1" max="600">
      <button (click)="startCountdown()">{{ buttonLabel }}</button>
    </div>

    <div *ngIf="running">
      {{ time }}
    </div>
  `,
  styles: [
  ]
})
export class CountdownComponent {
  @Input() buttonLabel = 'Starten';
  @Input() time = 30;
  @Output() timeChange = new EventEmitter<number>();
  @Output() finish = new EventEmitter();
  running = false;

  startCountdown(): void {
    this.running = true;
    const startTime = this.time;

    const subscription = timer(1000, 1000).subscribe(
      tick => {
        this.time--;
        this.timeChange.emit(this.time);

        if (this.time <= 0) {
          subscription.unsubscribe();
          this.running = false;
          this.time = startTime;
          this.finish.emit();
        }
      }
    );
  }
}
