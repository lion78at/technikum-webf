import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './types';

@Component({
  selector: 'app-news-input',
  template: `
    <form #form="ngForm">
      <h2>{{ news.id ? 'Bearbeite News' : 'Füge News hinzu' }}</h2>

      <p *ngIf="news.id">
        <label for="id">ID:</label>
        <input type="number" [value]="news.id" id="id" readonly>
      </p>

      <p>
        <label for="title">Titel:</label>
        <input [(ngModel)]="news.title" id="title" name="title" required minlength="2">
      </p>

      <p>
        <label for="text">Text:</label>
        <textarea [(ngModel)]="news.text" id="text" name="text" required minlength="5"></textarea>
      </p>

      <p>
        <button *ngIf="form.valid" type="button" (click)="finishWithOk()">Ok</button>
        <button type="button" (click)="finishWithCancel()">Abbrechen</button>
      </p>
    </form>
  `,
  styles: [`
    label {
      display: inline-block;
      vertical-align: top;
      width: 50px;
    }
  `]
})
export class NewsInputComponent {
  @Input() news = new News();
  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private newsService: NewsService) {}

  finishWithOk(): void {
    if (this.news.id) {
      // edit
      this.newsService.update(this.news)
        .then(() => this.ok.emit());
    }
    else {
      // add
      this.newsService.create(this.news)
        .then(() => this.ok.emit());
    }
  }

  finishWithCancel(): void {
    this.cancel.emit();
  }
}
