import { Arr } from './models/arr';
import { TestserviceServiceService } from './service/testservice-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  arr:Arr[] = [];


  public newTask: any;

  name: string = "";

  constructor() {}

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('task')|| '')


  }
 create(){

   if (!this.newTask) {
   }
   else {
     this.arr.push(this.newTask);
     localStorage.setItem('task', JSON.stringify(this.arr));
     this.newTask = "";
  }
 }
 
  delete(index: number){
    this.arr.splice(index, 1)
     localStorage.setItem('task',JSON.stringify(this.arr));

  }
  // deleteAll(){
  //   localStorage.clear();
  // }

  

}