import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routing} from '../routes';

import {HeaderComponent} from './header';

@NgModule({
  imports: [
    RouterModule,
    routing
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [RouterModule, HeaderComponent]
})
export class SharedModule {}
