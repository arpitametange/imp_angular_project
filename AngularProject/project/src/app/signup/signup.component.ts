import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myreactiveform!:FormGroup
constructor(private service:SignupService,private router:Router){
  this.createform()
}
  createform(){
    this.myreactiveform=new FormGroup({
      'user':new FormControl(""),
      'pass':new FormControl("")
    })
  }

  onsubmit(){
  let body={
    'email':this.myreactiveform.get('user')?.value,
    'password':this.myreactiveform.get('pass')?.value
  }
  this.service.post(body).subscribe(res=>{
    console.log('signup data',res);
    
  })
   this.router.navigate(['/next'])
  }
}
