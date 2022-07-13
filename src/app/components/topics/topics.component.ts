import { Component, OnInit } from '@angular/core';
import { ApiService } from '../room/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [ApiService]
})
export class TopicsComponent implements OnInit {
  myScriptElement: HTMLScriptElement | undefined;
  
  k = history.state.new;
  room = history.state.data;
  u = history.state.users;
  

  constructor(private api: ApiService,
    private router: Router,
    private homeComponent: HomeComponent,
   ) {
    

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/script.js";

    
    

   

    console.log(history.state.data)
    console.log (history.state.new)

    
  }

  ngOnInit() {
     
     
   

     this.u = history.state.users;
    
    
  }
  
 
}