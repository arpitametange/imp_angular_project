import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .offline {
      color: white;
    }
  `]
})
export class AppComponent {

  progressValue: number = 0;
  color: string = 'primary';

  startProgressBar() {
    const interval = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 10; // You can adjust the progress increment here.
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval time here for a smoother progress animation.
  }


  ///side nav logic
  opened=false



///sorting of element which present in array
array:any=[1,23]
sortarrray(){
  this.array.sort((a:any,b:any)=>{
return a>b?1:-1
  })
}
  event(value:any){
    this.array.push(+ value)
    console.log('click',value)
    this.sortarrray()
    console.log('this is the array',this.array);
    
  }
  variable=false
button(){
  this.variable=true
}
  user:any
  eventt(data:Event){
   this.user=(data.target as HTMLInputElement).value 
  }

  status='offline'
clickevent(){

  this.status=Math.random()>0.5?'online':'offline'
}
getcolor(){
  if (this.status==='offline') {
    return 'red'
  }
  return 'green'
}
}




