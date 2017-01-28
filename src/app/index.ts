import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './routes';
import { FormsModule }   from '@angular/forms';

import {SharedModule} from './shared/';
import {GameModule} from './game/';

import {MainComponent} from './main';
import {LandingComponent} from './landing';
import {WonderCarousalComponent} from './wonderCarousel.component';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    GameModule,
    FormsModule,
  ],
  declarations: [
    RootComponent,
    MainComponent,
    LandingComponent,
    FooterComponent,
    WonderCarousalComponent
  ],
  exports: [
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
