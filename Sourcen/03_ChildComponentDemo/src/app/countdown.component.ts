import { Component, EventEmitter, Input, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  template: `
    <div *ngIf="!running">
      <input type="number" [(ngModel)]="time" min="1" max="600">
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
  @Input() time = 30;
  @Input() buttonLabel = 'Starten';
  @Output() timeChange = new EventEmitter<number>();
  @Output() finish = new EventEmitter();
  running = false;

  startCountdown(): void {
    this.running = true;
    const startTime = this.time;

    // observer pattern
    const subscription = timer(1000, 1000).subscribe(tick => {
      this.time--;
      this.timeChange.emit(this.time);

      if (this.time <= 0) {
        subscription.unsubscribe();
        this.running = false;
        this.finish.emit();
        this.time = startTime;
      }
    });
  }
}
