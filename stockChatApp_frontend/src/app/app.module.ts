import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutesModule } from './app-routes.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TickerCardForHeaderBarComponent } from './components/header-bar/ticker-card-for-header-bar/ticker-card-for-header-bar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './material.module';
import { AvatarModule } from 'ngx-avatar';
import { SocialMediaPostCardComponentComponent } from './components/social-media-post-card-component/social-media-post-card-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonalAvatarWithIdentityDisplayComponent } from './personal-avatar-with-identity-display/personal-avatar-with-identity-display.component';
import { SocialMediaPostCardCommentComponentComponent } from './components/social-media-post-card-component/social-media-post-card-comment-component/social-media-post-card-comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    HeaderBarComponent,
    TickerCardForHeaderBarComponent,
    ProfilePageComponent,
    SocialMediaPostCardComponentComponent,
    PersonalAvatarWithIdentityDisplayComponent,
    SocialMediaPostCardCommentComponentComponent
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
