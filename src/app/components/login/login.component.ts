import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../room/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router) { }

  onProductCreate(products: {password: string,email: string}){
    console.log(products)
    this.http.post(this.baseurl + '/api/login/', products, { observe: 'response', withCredentials: true
    })
    .subscribe((res) => {
      console.log(res);
      this.router.navigate(['/'])

    });
  }

  ngOnInit(): void {
  }




  




  

}
