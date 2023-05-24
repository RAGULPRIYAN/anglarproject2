import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit{
  ngOnInit(): void {
    let children ="my age is"
    this.process1.emit(children)
    // setTimeout(() => {
    //   this.process1.emit('Hello from child!');
    // }, 2000);
  }
  name:string='Ragul M'
  show:boolean=false
  title:string='myfirst'
  isDisable:boolean=true
  @Input() public declared:any;
  @Input() public declared1:any;
  @Output() public process=new EventEmitter()
  @Output() public process1=new EventEmitter()
  backgroundColor: string = 'white';
  color:string='black'
arr:string[]=['ragul','ajai','vignesh']
num:number=20
  // arr=[1,2,3,4]
  onEvent(e:any){
    this.title="heading"
    this.backgroundColor="red"
    this.color='white'
    this.isDisable=!this.isDisable
    this.arr.push('saravana')
    this.declared= "WE ARE THE BOYS"
    console.log(e)
  }
  onSub1(){
    this.process.emit('CHILD TO PARENT 2')
  }
onSub(){
 this.process.emit("CHILD TO PARENT 1");
}
// triggerButtonClick() {
//   setTimeout(() => {
//     this.process.emit('Hello from child after delay!');
//   }, 2000); // Delay of 2000 milliseconds (2 seconds)
// }


  tempRef(e:any){
    this.num=40
    this.backgroundColor="green"
    this.color='black'
    this.arr.push('ponni')

  }
  myFirst(e:any){
    this.num=30
    this.backgroundColor="brown"
    this.color='white'
    this.arr.push('kavi')

  }
//   payroll:any=[{
//     id:1,
//     name:'priya',
//     age:23
//   },{id:2,
//   name:'janani',
// age:23},{
//   id:3,
//   name:'nuddles',
//   age:24,
  
// }]
 employees:class1[] = [{
      id:1,
      name:'ammu',
      age:23
    },{id:2,
    name:'saranya',
  age:23},{
    id:3,
    name:'nuddles',
    age:24,
    
  }]
  
}
// interface class1{
//   id:number;
//   name:string;
//   age:number;
// }
// class Payroll implements class1{
// id:number=1;
// name: string="ragul";
// age: number=22;
// constructor(id: number, name: string, age: number) {
//   this.id = id;
//   this.name = name;
//   this.age = age;
// }


// }
// const payroll = new Payroll(1, 'Ragul', 22);


// ONE WAY THIS METHOD

interface class1{
    id:number;
    name:string;
    age:number;
  }
  interface class2{

  }


