import { Component } from '@angular/core';
import { SuperHero } from './types';

const JOKES = [
  'Chuck Norris verwählt sich nicht. Wenn du abhebst, warst du am falschen Telefon.',
  'Chuck Norris hat einen Grizzlybär-Teppich. Der Bär lebt, hat bloß Angst, sich zu bewegen.',
  'Chuck Norris wurde von der Polizei angehalten. Die Polizisten sind mit einer Verwarnung davon gekommen.'
];

const SUPER_HEROES: SuperHero[] = [
  { name: 'Ant-Man', alterEgo: 'Hank Pym', actor: 'Michael Douglas' },
  { name: 'Black Widow', alterEgo: 'Natascha Romanoff', actor: 'Scarlett Johansson' },
  { name: 'Blade', alterEgo: 'Eric Brooks', actor: 'Wesley Snipes' },
  { name: 'Captain America', alterEgo: 'Steve Rogers', actor: 'Chris Evans' },
  { name: 'Daredevil', alterEgo: 'Matt Murdock', actor: 'Ben Affleck' },
  { name: 'Ghost Rider', alterEgo: 'Carter Slade', actor: 'Nicolas Cage' },
  { name: 'Hulk', alterEgo: 'Bruce Banner', actor: 'Eric Bana' },
  { name: 'Iron Man', alterEgo: 'Tony Stark', actor: 'Robert Downey Jr.' },
  { name: 'Spider-Man', alterEgo: 'Peter Parker', actor: 'Tobey Maguire' }
];

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p-tabView>
        <p-tabPanel *ngFor="let joke of jokes; let i = index" [header]="(i + 1) + '. Witz'">
          {{ joke }}
        </p-tabPanel>
      </p-tabView>
    </div>

    <div>
      <p-table [value]="superHeroes" [paginator]="true" [rows]="3">
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="name">Superheld <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="alterEgo">Alter Ego <p-sortIcon field="alterEgo"></p-sortIcon></th>
            <th pSortableColumn="actor">Schauspieler <p-sortIcon field="actor"></p-sortIcon></th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-superHero>   <!-- let superHero of superHeroes -->
          <tr>
            <td>{{ superHero.name }}</td>
            <td>{{ superHero.alterEgo }}</td>
            <td>{{ superHero.actor }}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>

    <div>
      <p-chart type="pie" [data]="sales"></p-chart>
    </div>
  `,
  styles: [`
    div {
      margin: 25px;
    }
  `]
})
export class AppComponent {
  jokes = JOKES;
  superHeroes = SUPER_HEROES;
  sales = {
    labels: [ 'Apfelstrudel', 'Kaiserschmarren', 'Palatschinken' ],
    datasets: [{
      data: [ 1, 2, 3 ],
      backgroundColor: [ 'red', 'green', 'blue' ]
    }]
  };
}
