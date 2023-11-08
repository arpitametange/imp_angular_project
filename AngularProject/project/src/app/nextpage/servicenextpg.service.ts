import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicenextpgService {

  constructor(private http:HttpClient){

  }
  url= 'https://the-mexican-food-db.p.rapidapi.com/'
  get(){
    let header=new HttpHeaders({
    
        'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
      
    })
    return this.http.get(this.url,{headers:header})
           


  }}
