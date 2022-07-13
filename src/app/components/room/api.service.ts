import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<any> {
    return this.http.get(this.baseurl + '/api/rooms/',
    {headers: this.httpHeaders});
  }

  getAllTopics(): Observable<any> {
    return this.http.get(this.baseurl + '/api/topics/',
    {headers: this.httpHeaders});
  }

  getOneRoom(id: number): Observable<any> {
    return this.http.get(this.baseurl + '/api/rooms/' + id + '/',
    {headers: this.httpHeaders});
  }

  getAllMessages(): Observable<any> {
    return this.http.get(this.baseurl + '/api/messages/',
    {headers: this.httpHeaders});
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/api/users/',
    {headers: this.httpHeaders});
  }

  onProductCreate(products: {body: string,user: string,room: number}){
    console.log(products)
    return this.http.post(this.baseurl + '/api/message/', products).pipe(catchError(this.handleError));
    
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
}

  createMessage(message: { body: any; user: any; room: any; }): Observable<any> {
    const body = {body: message.body , user: message.user, room: message.room };
    return this.http.post(this.baseurl + '/api/message/', body,
    {headers: this.httpHeaders});
  }

  

 

 
}
