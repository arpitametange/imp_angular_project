import { Component } from '@angular/core';
import {  Input } from '@angular/core';

@Component({
  selector: 'app-progressbaar',
  templateUrl: './progressbaar.component.html',
  styleUrls: ['./progressbaar.component.css']
})
export class ProgressbaarComponent {
  progressValue=false
  setloader(){
    this.progressValue=true
    setTimeout(() => {
      this.progressValue=false
    }, 1000);

  }
}
