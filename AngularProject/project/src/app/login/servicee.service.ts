import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {
url=' http://localhost:3000/users/'
  constructor(private http:HttpClient) { }
  get(email:any,password:any){
   return this.http.get(this.url)
  }
}
