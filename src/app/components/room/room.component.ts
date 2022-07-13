import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [ApiService]
})
export class RoomComponent {
  myScriptElement: HTMLScriptElement;
  
  k = history.state.new;
  room = history.state.data;
  

  baseurl = "http://127.0.0.1:8000";

  rooms = [{id: 1,name: '',company: '',description: '',experience: '',participants: '',host: '',topic: '',created: '',updated: ''}];

  messages = [{user: '',room: '',body: '',updated: '',created: '',category: '',id:''}];
  selectedMessage = [{user: '',room: '',body: '',updated: '',created: '',category: '',id:''}];

  users = [{username: '',id: '',name: '',bio: ''}];
  selectedUser;
  
  


 
  
  

  constructor(private api: ApiService,
    private http: HttpClient,
    private router: Router,
    private homeComponent: HomeComponent,
   ) {
    

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/script.js";
    

    this.getMessages();
    this.selectedMessage

    this.getUsers();
    this.selectedUser = {username: '',id: '',name: '',bio: ''};

    console.log(history.state.data)
    console.log (history.state.new)

    
  }

  ngOnInit() {
     
     
     
    
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
  
  getMessages = () => {
    this.api.getAllMessages().subscribe(
      data => {
        this.messages = data;
        
       
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
  onProductCreate(products: {body: string,user: string,room: number}){
    console.log(products)
    this.http.post(this.baseurl + '/api/message/', products)
    .subscribe((res) => {
      console.log(res);

    });
  }


  
  

  

}