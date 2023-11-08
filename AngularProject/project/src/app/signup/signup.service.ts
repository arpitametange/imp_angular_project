import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url=' http://localhost:3000/users/'
  constructor(private http:HttpClient) { }
  post(body:any){
   return this.http.post(this.url,body)
  }
}
