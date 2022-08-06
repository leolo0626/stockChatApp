import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutesModule } from './app-routes.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TickerCardForHeaderBarComponent } from './ticker-card-for-header-bar/ticker-card-for-header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    HeaderBarComponent,
    TickerCardForHeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
