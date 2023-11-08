import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // ...
  
  constructor(private dialog: MatDialog) {
    // ...
  }
  
  login(){
   let dialog=this.dialog.open(LoginComponent)
  //  dialog.afterClosed().subscribe(res=>{

  //  })
  }
  signup(){
    let dialog=this.dialog.open(SignupComponent)
    dialog.afterClosed().subscribe(res=>{})
  }
}
