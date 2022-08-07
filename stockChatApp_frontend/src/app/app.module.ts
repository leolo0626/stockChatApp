import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutesModule } from './app-routes.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TickerCardForHeaderBarComponent } from './ticker-card-for-header-bar/ticker-card-for-header-bar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './material.module';
import { AvatarModule } from 'ngx-avatar';
import { SocialMediaPostCardComponentComponent } from './social-media-post-card-component/social-media-post-card-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    HeaderBarComponent,
    TickerCardForHeaderBarComponent,
    ProfilePageComponent,
    SocialMediaPostCardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
