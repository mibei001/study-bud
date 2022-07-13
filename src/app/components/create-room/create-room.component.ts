import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../home/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
  providers: [ApiService]
})
export class CreateRoomComponent implements OnInit {


  baseurl = "http://127.0.0.1:8000";

  topics = [{id: 1,name: ''}];
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) { 

    this.getTopics();
  }

  ngOnInit(): void {
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

  onRoomCreate(products: {name: string,topic: string,description: number,host: string}){
    console.log(products)
    this.http.post(this.baseurl + '/api/room/', products)
    .subscribe((res) => {
      console.log(res);

    });
  }

  

}
