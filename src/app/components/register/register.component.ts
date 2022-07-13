import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../room/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {

  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router
    ) { }

  onProductCreate(products: {username: string,password: string,email: number}){
    console.log(products)
    this.http.post(this.baseurl + '/api/register/', products)
    .subscribe((res) => {
      this.router.navigate(['/login'])

    });
  }

  ngOnInit(): void {
  }

}
