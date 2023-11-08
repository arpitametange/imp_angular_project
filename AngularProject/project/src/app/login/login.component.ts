import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceeService } from './servicee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:ServiceeService,private router:Router,private snackbar:MatSnackBar){
              this.createform()
  }

  myreactiveform!:FormGroup
  createform(){
    this.myreactiveform=new FormGroup({
    'user':new FormControl(''),
    'pass':new FormControl('')
    })
  }
onsubmit(){
console.log(this.myreactiveform); 
let user=this.myreactiveform.get('user')?.value
let pass=this.myreactiveform.get('pass')?.value
console.log('username pass',user,pass);

this.service.get(user,pass).subscribe((res:any)=>{
    console.log('username',res);
    const foundUser = res.find((userObj:any) => userObj.email == user && userObj.password == pass);
    console.log('founduser',foundUser);
    
    if (foundUser) {
      localStorage.setItem('email', user);
      localStorage.setItem('password', pass);
      this.router.navigate(['next']);
      console.log('matched');
      this.snackbar.open('🤩🤩🤩Passoword is correct🤩🤩🤩','',{duration:1000,verticalPosition:'bottom'}
      )
      


    } else {
      // this.router.navigate(['']);
      this.snackbar.open(' 🙃 Incorrect password or email','',{duration:1000})
      console.log('passwrod inccorrect');
      
    }
  });
  }

  }

 