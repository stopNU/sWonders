import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {routing} from '../routes';

import {HeaderComponent} from './header';
import {WonderService} from './wonder.service';

@NgModule({
  imports: [
    RouterModule,
    routing,
    HttpModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [WonderService],
  exports: [RouterModule, HeaderComponent]
})
export class SharedModule {}
