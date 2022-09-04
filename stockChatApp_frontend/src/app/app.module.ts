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
import { PersonalAvatarWithIdentityDisplayComponent } from './components/personal-avatar-with-identity-display/personal-avatar-with-identity-display.component';
import { SocialMediaPostCardCommentComponentComponent } from './components/social-media-post-card-component/social-media-post-card-comment-component/social-media-post-card-comment-component.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { MentionModule } from 'angular-mentions';
import { NgxEditorModule } from "ngx-editor";
import { MessagerWidgetComponent } from './components/messager-widget/messager-widget.component';
import { MessageListComponent } from './components/messager-widget/message-list/message-list.component';
import { MessageChatComponent } from './components/messager-widget/message-chat/message-chat.component';
import { MessageComponent } from './components/messager-widget/message-chat/message/message.component';


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
    SocialMediaPostCardCommentComponentComponent,
    PostEditorComponent,
    MessagerWidgetComponent,
    MessageListComponent,
    MessageChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    MentionModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
