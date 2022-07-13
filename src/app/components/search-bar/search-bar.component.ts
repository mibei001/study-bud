import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../room/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [ApiService]
})
export class SearchBarComponent implements OnInit {

  rooms = [{id: 1,name: '',company: '',description: '',experience: '',participants: '',host: '',topic: '',created: '',updated: ''}];
  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router
    ) { 
    
    
  }

  onProductCreate(products: {body: string,user: string,room: number}){
    console.log(products)
    this.http.post(this.baseurl + '/api/message/', products)
    .subscribe((res) => {
      console.log(res);

    });
  }

  
  

  ngOnInit(): void {
  }


}
