import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressbaarComponent } from './progressbaar/progressbaar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {  HttpClientModule } from '@angular/common/http';
import { NextpageComponent } from './nextpage/nextpage.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignupComponent } from './signup/signup.component';
import { ArrayelementComponent } from './arrayelement/arrayelement.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressbaarComponent,
    NavbarComponent,
    LoginComponent,
    NextpageComponent,
    SignupComponent,
    ArrayelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
     MatInputModule, MatSelectModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
