import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.temp=this.child.name
    console.log(this.temp)
    
    this.age=this.child1.age
  }
  
  title = 'finstein';
  name='FULLSTACKTEAM';
  head='TEAM 1'
  message=''
  temp=""
  age=''
  onSub(event:string){
    this.head=event  
  }
  // onSub(message:string){
  //   console.log("receives a child:",message)
  // }
  onSet(message:string){
    this.temp=message
    
  }
  @ViewChild(MyappComponent) child:any;
  @ViewChild(LifecycleComponent) child1:any;
  
}
