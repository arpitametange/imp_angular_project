import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicenextpgService } from './servicenextpg.service';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent {
  image:any=[]


constructor(private service:ServicenextpgService){
this.get()
  

}  
get(){

  this.service.get().subscribe((res:any)=>
  // console.log(res,'res')

  this.image=res
  
  
)

}
}
