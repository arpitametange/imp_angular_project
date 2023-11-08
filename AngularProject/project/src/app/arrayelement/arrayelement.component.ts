import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayelement',
  templateUrl: './arrayelement.component.html',
  styleUrls: ['./arrayelement.component.css']
})
export class ArrayelementComponent {
  numberArr= [1,242,4 ,34,5];
  ngOnInit() {
    this.sortArray();
  }
  // for the sorting the array
  sortArray(){
     for (let i = 0; i < this.numberArr.length; i++) {
     for (let j = i+1;j < this.numberArr.length; j++) {
     if(this.numberArr[i] > this.numberArr[j])
     { 
      let temp =0;
        temp = this.numberArr[i];
        this.numberArr[i]= this.numberArr[j];
        this.numberArr[j] = temp;
     } 
      
     }
      
    }
  }

  // pushing element in the array
  addElement(element:any)
  {
    
    this.numberArr.push(+ element)
    this.sortArray();
    console.log(this.numberArr);
    
  }
}
