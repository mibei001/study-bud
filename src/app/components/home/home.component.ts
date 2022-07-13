import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent {

  baseurl = "http://127.0.0.1:8000";
  


  
  rooms = [{id: 1,name: '',company: '',description: '',experience: '',participants: '',host: '',topic: '',created: '',updated: ''}];
  room = [{id: 2,name: '',company: '',description: '',experience: '',participants: '',host: '',topic: '',created: '',updated: ''}];
  topics = [{id: 1,name: ''}];
  selectedTopic
  
  
  messages = [{user: '',room: '',body: '',updated: '',created: ''}];

  car = history.state.data;

  users = [{username: '',id: '',name: '',bio: ''}];
  


  
  

  constructor(private api: ApiService,
    private router:Router,
    private http: HttpClient
   ) {
    this.getRooms();
    
    

    this.getTopics();
    this.selectedTopic = {id: -1, name: '' };

    this.getMessages();

    


    
    
    

    this.room = this.room;
    this.messages = this.messages

    
    
  }

  ngOnInit(): void {
    this.http.get(this.baseurl + '/api/user/', {
      observe: 'response', withCredentials: true
    })
    .subscribe((res: any) => {
      console.log(res);

    });
    
  }
  

  getRooms = () => {
    this.api.getAllRooms().subscribe(
      data => {
        this.rooms = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getUsers = () => {
    this.api.getAllUsers().subscribe(
      data => {
        this.users = data;
       
      },
      error => {
        console.log(error);
      }
    );
  }

  roomClicked = (room: { id: number; }) => {
    this.router.navigate(['../room/room.component.html'], {state: {data: room,new: this.messages,users: this.users}})
    this.api.getOneRoom(room.id).subscribe(
      data => {
        this.room = data;
        
        
        
      },
      error => {
        console.log(error);
      }
    );
  }

  getTopics = () => {
    this.api.getAllTopics().subscribe(
      data => {
        this.topics = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  getMessages = () => {
    this.router.navigate(['#'], {state: {data: this.messages}})
    this.api.getAllMessages().subscribe(
      data => {
        this.messages = data;
        this.messages = this.messages;
        
      },
      error => {
        console.log(error);
      }
    );
  }
}







