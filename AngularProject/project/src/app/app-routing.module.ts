import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbaarComponent } from './progressbaar/progressbaar.component';
import { AppComponent } from './app.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'',redirectTo:'',pathMatch:'full'},
{path:'sign',component:SignupComponent},
  {path:'progress', component:ProgressbaarComponent},
  {path:'next', component:NextpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
