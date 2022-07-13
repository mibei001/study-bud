import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomComponent } from './components/room/room.component';
import { TopicsComponent } from './components/topics/topics.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'room/:id',
    component: RoomComponent,
  },
  {
    path: 'topics',
    component: TopicsComponent,
    },
  {
    path: 'create-room',
    component: CreateRoomComponent,
  },
  {
    path: 'search',
    component: SearchBarComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  
  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
