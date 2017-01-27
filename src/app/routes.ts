import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main';
import {GameComponent} from './game/game.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '7wonders',
    component: GameComponent
  }
];

export const routing = RouterModule.forRoot(routes);
