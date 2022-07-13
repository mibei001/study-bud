import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { TopicsComponent } from './components/topics/topics.component';
import { RoomComponent } from './components/room/room.component';
import { DatePipe } from '@angular/common';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicsComponent,
    RoomComponent,
    CreateRoomComponent,
    SearchBarComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }