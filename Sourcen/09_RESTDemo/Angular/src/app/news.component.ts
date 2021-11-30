import { Component, ViewChild } from '@angular/core';
import { NewsListComponent } from './news-list.component';
import { NewsService } from './news.service';
import { News } from './types';

@Component({
  selector: 'app-news',
  template: `
    <h1>Newsverwaltung</h1>

    <app-news-list
      #newsList
      (select)="selectNews($event)"
    >
    </app-news-list>

    <app-news-input
      *ngIf="selectedNews"
      [news]="selectedNews"
      (ok)="unselectNews(true)"
      (cancel)="unselectNews(false)"
    >
    </app-news-input>
  `,
  styles: [
  ]
})
export class NewsComponent  {
  @ViewChild('newsList') newsList!: NewsListComponent;
  selectedNews?: News;

  constructor(private newsService: NewsService) {}

  selectNews(id: number): void {
    if (id) {
      // edit
      this.newsService.retrieve(id)
        .then(news => this.selectedNews = news);
    }
    else {
      // add
      this.selectedNews = new News();
    }
  }

  unselectNews(refresh: boolean): void {
    this.selectedNews = undefined;

    if (refresh) {
      this.newsList.refresh();
    }
  }
}
